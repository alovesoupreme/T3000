#!/usr/bin/env node

/**
 * T3000 Figma Sync - Import from Figma
 * Syncs changes from Figma back to T3000_Master_Deck.html
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const CONFIG = {
  figmaApiToken: process.env.FIGMA_API_TOKEN,
  figmaFileKey: process.env.FIGMA_FILE_KEY,
  deckHtmlPath: path.join(__dirname, '../T3000_Master_Deck.html'),
  backupPath: path.join(__dirname, `../T3000_Master_Deck_BACKUP_${Date.now()}.html`),
};

/**
 * Figma API Client
 */
class FigmaClient {
  constructor(token) {
    this.token = token;
    this.baseUrl = 'https://api.figma.com/v1';
  }

  async getFile(fileKey) {
    return new Promise((resolve, reject) => {
      const url = `${this.baseUrl}/files/${fileKey}`;
      const options = {
        headers: {
          'X-Figma-Token': this.token,
        },
      };

      https.get(url, options, (res) => {
        let body = '';
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
          try {
            const json = JSON.parse(body);
            if (res.statusCode === 200) {
              resolve(json);
            } else {
              reject(new Error(`API Error: ${res.statusCode} - ${json.message || body}`));
            }
          } catch (err) {
            reject(err);
          }
        });
      }).on('error', reject);
    });
  }

  async getImages(fileKey, ids) {
    return new Promise((resolve, reject) => {
      const idsParam = ids.join(',');
      const url = `${this.baseUrl}/images/${fileKey}?ids=${idsParam}&format=svg`;
      const options = {
        headers: {
          'X-Figma-Token': this.token,
        },
      };

      https.get(url, options, (res) => {
        let body = '';
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
          try {
            const json = JSON.parse(body);
            resolve(json.images || {});
          } catch (err) {
            reject(err);
          }
        });
      }).on('error', reject);
    });
  }
}

/**
 * HTML Generator - Convert Figma structure back to HTML
 */
class HTMLGenerator {
  constructor(figmaData) {
    this.data = figmaData;
    this.document = figmaData.document;
  }

  findDeckFrame() {
    // Find the T3000 Deck frame
    const canvas = this.document.children[0]; // First page
    const deckFrame = canvas.children.find(child =>
      child.name.startsWith('T3000 Deck')
    );
    return deckFrame;
  }

  generateHTML() {
    const deckFrame = this.findDeckFrame();
    if (!deckFrame) {
      throw new Error('T3000 Deck frame not found in Figma file');
    }

    const slides = deckFrame.children || [];
    const sections = slides.map((slide, idx) => this.generateSection(slide, idx));

    return this.wrapInHTMLTemplate(sections.join('\n\n'));
  }

  generateSection(frame, index) {
    const children = frame.children || [];
    const content = children.map(node => this.generateNode(node)).join('\n');

    return `    <section id="slide-${index + 1}">
        <div class="container">
${content}
        </div>
    </section>`;
  }

  generateNode(node) {
    if (node.type === 'TEXT') {
      return this.generateTextNode(node);
    } else if (node.type === 'FRAME' || node.type === 'GROUP') {
      return this.generateFrameNode(node);
    }
    return '';
  }

  generateTextNode(node) {
    const text = node.characters || '';
    const fontSize = node.style?.fontSize || 16;

    // Determine tag based on font size
    let tag = 'p';
    if (fontSize >= 60) tag = 'h1';
    else if (fontSize >= 40) tag = 'h2';
    else if (fontSize >= 30) tag = 'h3';
    else if (fontSize >= 24) tag = 'h4';

    const classes = this.inferClasses(node.name);
    const classAttr = classes.length ? ` class="${classes.join(' ')}"` : '';

    return `            <${tag}${classAttr}>${this.escapeHTML(text)}</${tag}>`;
  }

  generateFrameNode(node) {
    const children = node.children || [];
    const childrenHTML = children.map(child => this.generateNode(child)).join('\n');

    const classes = this.inferClasses(node.name);
    const classAttr = classes.length ? ` class="${classes.join(' ')}"` : '';

    return `            <div${classAttr}>
${childrenHTML}
            </div>`;
  }

  inferClasses(name) {
    const classes = [];

    // Animation classes
    if (name.includes('fade-in')) classes.push('fade-in');
    if (name.includes('slide-in-left')) classes.push('slide-in-left');
    if (name.includes('slide-in-right')) classes.push('slide-in-right');
    if (name.includes('scale-in')) classes.push('scale-in');
    if (name.includes('stagger')) classes.push('stagger-container');

    // Component classes
    if (name.includes('card')) classes.push('card');
    if (name.includes('glass')) classes.push('glass-card');
    if (name.includes('stat')) classes.push('stat-card');
    if (name.includes('timeline')) classes.push('timeline-item');

    return classes;
  }

  escapeHTML(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  wrapInHTMLTemplate(content) {
    const originalHTML = fs.readFileSync(CONFIG.deckHtmlPath, 'utf8');

    // Extract head and styles from original
    const headMatch = originalHTML.match(/<head>([\s\S]*?)<\/head>/);
    const head = headMatch ? headMatch[1] : '';

    return `<!DOCTYPE html>
<html lang="en">
<head>${head}
</head>
<body>
${content}
</body>
</html>`;
  }
}

/**
 * Main Sync Function
 */
async function syncFromFigma() {
  console.log('🔄 Starting Figma → HTML sync...\n');

  // Validate configuration
  if (!CONFIG.figmaApiToken) {
    console.error('❌ Error: FIGMA_API_TOKEN environment variable not set');
    console.log('Please set: export FIGMA_API_TOKEN="your-token-here"');
    process.exit(1);
  }

  if (!CONFIG.figmaFileKey) {
    console.error('❌ Error: FIGMA_FILE_KEY environment variable not set');
    console.log('Please set: export FIGMA_FILE_KEY="your-file-key"');
    process.exit(1);
  }

  // Fetch Figma file
  console.log('☁️  Fetching Figma file...');
  const client = new FigmaClient(CONFIG.figmaApiToken);
  const figmaData = await client.getFile(CONFIG.figmaFileKey);
  console.log(`✅ Fetched: ${figmaData.name}\n`);

  // Generate HTML
  console.log('🎨 Generating HTML from Figma structure...');
  const generator = new HTMLGenerator(figmaData);
  const html = generator.generateHTML();
  console.log('✅ HTML generated\n');

  // Create backup
  console.log('💾 Creating backup...');
  fs.copyFileSync(CONFIG.deckHtmlPath, CONFIG.backupPath);
  console.log(`✅ Backup: ${path.basename(CONFIG.backupPath)}\n`);

  // Write updated HTML
  console.log('📝 Writing updated HTML...');
  fs.writeFileSync(CONFIG.deckHtmlPath, html);
  console.log(`✅ Updated: ${path.basename(CONFIG.deckHtmlPath)}\n`);

  console.log('✨ Sync complete!\n');
  console.log('📋 Next steps:');
  console.log('1. Open T3000_Master_Deck.html in browser');
  console.log('2. Verify all changes look correct');
  console.log('3. Test animations and interactions');
  console.log('4. If issues, restore from backup\n');
}

// Run if called directly
if (require.main === module) {
  syncFromFigma().catch(error => {
    console.error('❌ Fatal error:', error);
    console.error('\nIf the error persists:');
    console.error('1. Check your FIGMA_API_TOKEN is valid');
    console.error('2. Verify FIGMA_FILE_KEY is correct');
    console.error('3. Ensure you have read access to the Figma file');
    process.exit(1);
  });
}

module.exports = { FigmaClient, HTMLGenerator };
