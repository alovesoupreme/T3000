# T3000 Figma Integration - Quick Start Guide

## 🚀 Get Editing in Figma in 5 Minutes

### Step 1: Get Your Figma API Token (2 minutes)

1. Go to https://www.figma.com/developers/api#access-tokens
2. Click "Get personal access token"
3. Name it "T3000 Deck Integration"
4. Copy the token (starts with `figd_`)

### Step 2: Export to Figma (1 minute)

```bash
cd "/Users/mac/Documents/Coding /T3000/figma-integration"

# Set your token
export FIGMA_API_TOKEN="figd_YOUR_TOKEN_HERE"

# Generate export file
node figma-export.js
```

You'll see:
```
🚀 Starting T3000 → Figma export...
📄 Parsing T3000_Master_Deck.html...
✅ Found 12 sections
🎨 Generating Figma frames...
✅ Generated 12 slide frames
✅ Exported to: figma-export.json
✨ Export complete!
```

### Step 3: Import to Figma (2 minutes)

**Option A: Using Figma Plugin (Easiest)**

1. Open Figma Desktop app
2. Create new file: "T3000 Pitch Deck"
3. Go to Plugins → Development → Import plugin from manifest
4. Select: `/Users/mac/Documents/Coding /T3000/figma-integration/figma-plugin/manifest.json`
5. Run plugin: Plugins → Development → T3000 Deck Importer
6. Click "Select figma-export.json" → Choose the file
7. Click "Import to Figma"
8. Wait ~30 seconds for import to complete

**Option B: Manual Setup (Alternative)**

1. Create new Figma file
2. Import `figma-export.json` data manually
3. Use design tokens from `design-tokens.json`

### Step 4: Start Editing! ✨

Now you can:
- ✅ Edit text directly in Figma
- ✅ Change colors visually
- ✅ Adjust spacing with drag & drop
- ✅ Rearrange sections
- ✅ Add new slides
- ✅ Update typography
- ✅ Modify layouts with auto-layout

### Step 5: Sync Back to HTML (when done)

```bash
# Get your Figma file key from URL
# URL: https://www.figma.com/file/ABC123/T3000-Pitch-Deck
# File key is: ABC123

export FIGMA_FILE_KEY="ABC123"

# Sync changes back
node sync-from-figma.js
```

Done! Your HTML file is now updated with Figma changes.

---

## 💡 Pro Tips

### Keep Animations
When editing in Figma, preserve layer names with these keywords:
- "fade-in" → Fade in animation
- "slide-in-left" → Slide from left
- "slide-in-right" → Slide from right
- "scale-in" → Scale up animation
- "stagger" → Stagger children

### Component Naming
Name layers clearly:
- "Stat Card" → Converts to stat card component
- "Timeline Item" → Timeline entry
- "Glass Card" → Glass morphism effect
- "Hero Section" → Hero area

### Design Tokens
All colors, fonts, and spacing are in `design-tokens.json`:
- Colors: white, near-black, mid-grey, light-grey, accent
- Gradients: gradient-1 (purple), gradient-2 (pink), gradient-3 (cyan)
- Fonts: Inter (300-700 weights)
- Spacing: XS (8px) to 3XL (128px)

---

## 🆘 Troubleshooting

### "FIGMA_API_TOKEN not set"
```bash
export FIGMA_API_TOKEN="figd_your_token"
```

### "Cannot find T3000_Master_Deck.html"
Make sure you're in the T3000 directory:
```bash
cd "/Users/mac/Documents/Coding /T3000"
```

### Plugin doesn't appear
1. Use Figma Desktop app (not browser)
2. Import plugin from manifest
3. Check Plugins → Development menu

### Sync loses animations
Check layer names include animation keywords (fade-in, slide-in, etc.)

---

## 📞 Need Help?

- Full docs: `README.md`
- Original deck: `../T3000_Master_Deck.html`
- Design system: `design-tokens.json`
- ClaudeFlow memory: `npx @claude-flow/cli@latest memory search --query "figma"`

---

**Happy editing! 🎨**
