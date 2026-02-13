#!/usr/bin/env node

/**
 * T3000 Figma Integration - Export Script
 * Converts T3000_Master_Deck.html to Figma-compatible format
 * Uses Figma REST API to create frames and components
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Load .env file if present
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match && !process.env[match[1].trim()]) {
      process.env[match[1].trim()] = match[2].trim();
    }
  });
}

// Configuration
const CONFIG = {
  figmaApiToken: process.env.FIGMA_API_TOKEN,
  figmaFileKey: process.env.FIGMA_FILE_KEY,
  deckHtmlPath: path.join(__dirname, '../T3000_Master_Deck.html'),
  designTokensPath: path.join(__dirname, 'design-tokens.json'),
  slideWidth: 1920,
  slideHeight: 1080,
};

// Load design tokens
const designTokens = JSON.parse(fs.readFileSync(CONFIG.designTokensPath, 'utf8'));

/**
 * Figma API Client
 */
class FigmaClient {
  constructor(token) {
    this.token = token;
    this.baseUrl = 'https://api.figma.com/v1';
  }

  async request(method, endpoint, data = null) {
    return new Promise((resolve, reject) => {
      const url = new URL(`${this.baseUrl}${endpoint}`);
      const options = {
        method,
        headers: {
          'X-Figma-Token': this.token,
          'Content-Type': 'application/json',
        },
      };

      const req = https.request(url, options, (res) => {
        let body = '';
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
          try {
            const json = JSON.parse(body);
            if (res.statusCode >= 200 && res.statusCode < 300) {
              resolve(json);
            } else {
              reject(new Error(`API Error: ${res.statusCode} - ${json.message || body}`));
            }
          } catch (err) {
            reject(err);
          }
        });
      });

      req.on('error', reject);
      if (data) req.write(JSON.stringify(data));
      req.end();
    });
  }

  async getFile(fileKey) {
    return this.request('GET', `/files/${fileKey}`);
  }

  async postToFile(fileKey, data) {
    return this.request('POST', `/files/${fileKey}`, data);
  }
}

/**
 * HTML Parser - Extract content from T3000 deck
 */
class DeckParser {
  constructor(htmlPath) {
    this.html = fs.readFileSync(htmlPath, 'utf8');
  }

  extractSections() {
    const sections = [];
    const sectionRegex = /<section[^>]*>([\s\S]*?)<\/section>/gi;
    let match;

    while ((match = sectionRegex.exec(this.html)) !== null) {
      const content = match[1];
      sections.push({
        html: match[0],
        content: this.extractContent(content),
        classes: this.extractClasses(match[0]),
      });
    }

    return sections;
  }

  extractContent(html) {
    return {
      headings: this.extractTag(html, 'h[1-6]'),
      paragraphs: this.extractTag(html, 'p'),
      lists: this.extractTag(html, 'ul|ol'),
      images: this.extractImages(html),
    };
  }

  extractTag(html, tagPattern) {
    const regex = new RegExp(`<(${tagPattern})[^>]*>([\\s\\S]*?)</\\1>`, 'gi');
    const results = [];
    let match;

    while ((match = regex.exec(html)) !== null) {
      results.push({
        tag: match[1],
        content: match[2].replace(/<[^>]*>/g, '').trim(),
      });
    }

    return results;
  }

  extractImages(html) {
    const regex = /<img[^>]*src="([^"]*)"[^>]*>/gi;
    const images = [];
    let match;

    while ((match = regex.exec(html)) !== null) {
      images.push(match[1]);
    }

    return images;
  }

  extractClasses(html) {
    const match = html.match(/class="([^"]*)"/);
    return match ? match[1].split(' ') : [];
  }
}

/**
 * Figma Frame Generator
 */
class FrameGenerator {
  constructor(tokens) {
    this.tokens = tokens;
  }

  createSlideFrame(index, section) {
    return {
      type: 'FRAME',
      name: `Slide ${index + 1}`,
      width: CONFIG.slideWidth,
      height: CONFIG.slideHeight,
      x: index * (CONFIG.slideWidth + 100), // 100px gap between slides
      y: 0,
      backgroundColor: this.parseColor(this.tokens.colors.white.$value),
      children: this.generateSlideContent(section),
      constraints: {
        horizontal: 'MIN',
        vertical: 'MIN',
      },
      layoutMode: 'VERTICAL',
      primaryAxisSizingMode: 'FIXED',
      counterAxisSizingMode: 'FIXED',
      paddingLeft: 80,
      paddingRight: 80,
      paddingTop: 80,
      paddingBottom: 80,
      itemSpacing: 32,
    };
  }

  generateSlideContent(section) {
    const children = [];

    // Add headings
    section.content.headings.forEach((heading, idx) => {
      children.push(this.createTextNode(heading.content, heading.tag, idx));
    });

    // Add paragraphs
    section.content.paragraphs.forEach((para, idx) => {
      children.push(this.createTextNode(para.content, 'p', idx));
    });

    return children;
  }

  createTextNode(content, tag, index) {
    const fontSizes = {
      h1: 96,
      h2: 64,
      h3: 40,
      h4: 32,
      p: 20,
    };

    const fontWeights = {
      h1: 700,
      h2: 600,
      h3: 600,
      h4: 600,
      p: 400,
    };

    return {
      type: 'TEXT',
      name: `${tag.toUpperCase()} - ${content.substring(0, 30)}...`,
      characters: content,
      style: {
        fontFamily: 'Inter',
        fontSize: fontSizes[tag] || 16,
        fontWeight: fontWeights[tag] || 400,
        textAlignHorizontal: tag.startsWith('h') ? 'CENTER' : 'LEFT',
        lineHeightPx: fontSizes[tag] * 1.2,
        fills: [{
          type: 'SOLID',
          color: this.parseColor(tag === 'p' ? this.tokens.colors['mid-grey'].$value : this.tokens.colors['near-black'].$value),
        }],
      },
      layoutAlign: 'STRETCH',
    };
  }

  parseColor(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16) / 255,
      g: parseInt(result[2], 16) / 255,
      b: parseInt(result[3], 16) / 255,
    } : { r: 1, g: 1, b: 1 };
  }

  createComponentFrame(name, children) {
    return {
      type: 'COMPONENT',
      name,
      width: 'AUTO',
      height: 'AUTO',
      children,
    };
  }
}

/**
 * Main Export Function
 */
async function exportToFigma() {
  console.log('🚀 Starting T3000 → Figma export...\n');

  // Validate configuration
  if (!CONFIG.figmaApiToken) {
    console.error('❌ Error: FIGMA_API_TOKEN environment variable not set');
    console.log('Please set your Figma API token:');
    console.log('export FIGMA_API_TOKEN="your-token-here"');
    console.log('\nGet your token at: https://www.figma.com/developers/api#access-tokens');
    process.exit(1);
  }

  if (!CONFIG.figmaFileKey) {
    console.log('⚠️  No FIGMA_FILE_KEY set. Will generate export data only.');
    console.log('To create directly in Figma, set: export FIGMA_FILE_KEY="your-file-key"\n');
  }

  // Parse HTML deck
  console.log('📄 Parsing T3000_Master_Deck.html...');
  const parser = new DeckParser(CONFIG.deckHtmlPath);
  const sections = parser.extractSections();
  console.log(`✅ Found ${sections.length} sections\n`);

  // Generate Figma frames
  console.log('🎨 Generating Figma frames...');
  const generator = new FrameGenerator(designTokens);
  const frames = sections.map((section, idx) => generator.createSlideFrame(idx, section));
  console.log(`✅ Generated ${frames.length} slide frames\n`);

  // Export to JSON
  const exportData = {
    meta: {
      source: 'T3000_Master_Deck.html',
      version: 'v1.2 Professional',
      exportDate: new Date().toISOString(),
      slideCount: frames.length,
      slideSize: `${CONFIG.slideWidth}x${CONFIG.slideHeight}`,
    },
    designTokens,
    frames,
  };

  const exportPath = path.join(__dirname, 'figma-export.json');
  fs.writeFileSync(exportPath, JSON.stringify(exportData, null, 2));
  console.log(`✅ Exported to: ${exportPath}\n`);

  // If Figma file key provided, upload to Figma
  if (CONFIG.figmaFileKey) {
    console.log('☁️  Uploading to Figma...');
    const client = new FigmaClient(CONFIG.figmaApiToken);

    try {
      // Note: Direct frame creation via REST API is limited
      // This would typically require a Figma plugin for full functionality
      console.log('ℹ️  Direct upload requires a Figma plugin.');
      console.log('   Use the generated figma-export.json with the Figma plugin.');
    } catch (error) {
      console.error('❌ Upload failed:', error.message);
    }
  }

  console.log('\n✨ Export complete!');
  console.log('\n📋 Next steps:');
  console.log('1. Install the Figma plugin (see figma-plugin/ directory)');
  console.log('2. Open your Figma file');
  console.log('3. Run the plugin and import figma-export.json');
  console.log('4. Edit in Figma, then sync back using sync-from-figma.js\n');
}

// Run if called directly
if (require.main === module) {
  exportToFigma().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { FigmaClient, DeckParser, FrameGenerator };
