# T3000 Figma Integration

Complete workflow for editing T3000 pitch deck in Figma and syncing changes back to HTML.

## 🎯 Overview

This integration enables:
- **Export HTML → Figma**: Convert T3000_Master_Deck.html to Figma frames
- **Edit in Figma**: Use Figma's visual editor to modify design, content, and layout
- **Import Figma → HTML**: Sync changes back to HTML preserving animations and functionality

## 📋 Prerequisites

1. **Figma Account** (free or paid)
2. **Figma API Token** - Get from: https://www.figma.com/developers/api#access-tokens
3. **Node.js** v18+ (already installed: v22.22.0)

## 🚀 Quick Start

### Step 1: Set Up Environment

```bash
cd "/Users/mac/Documents/Coding /T3000/figma-integration"

# Set your Figma API token
export FIGMA_API_TOKEN="your-token-here"

# Optional: Set Figma file key for direct upload
export FIGMA_FILE_KEY="your-file-key"
```

### Step 2: Export to Figma

```bash
# Generate Figma-compatible export
node figma-export.js
```

This creates `figma-export.json` with:
- All slides as 1920x1080 frames
- Design tokens (colors, typography, spacing)
- Content extracted from HTML
- Component specifications

### Step 3: Import to Figma

**Option A: Using Figma Plugin (Recommended)**

1. Open Figma
2. Install the T3000 Importer plugin (see `figma-plugin/` directory)
3. Run plugin: Plugins → T3000 Importer
4. Select `figma-export.json`
5. Click "Import"

**Option B: Manual Setup**

1. Create new Figma file
2. Set canvas to 1920x1080
3. Use `figma-export.json` as reference
4. Manually recreate frames with design tokens

### Step 4: Edit in Figma

Now you can:
- ✅ Change colors, fonts, spacing visually
- ✅ Rearrange content with drag & drop
- ✅ Update text directly
- ✅ Add new slides or sections
- ✅ Adjust layouts with auto-layout
- ✅ Create variants for different states

### Step 5: Sync Back to HTML

```bash
# Export your Figma file
# In Figma: File → Export → T3000.fig

# Convert Figma changes back to HTML
node sync-from-figma.js --file T3000.fig
```

This will:
- Parse Figma file structure
- Update HTML content
- Preserve animations and interactions
- Maintain responsive behavior

## 📁 File Structure

```
figma-integration/
├── README.md                    # This file
├── design-tokens.json           # Design system tokens
├── figma-export.js             # HTML → Figma export script
├── sync-from-figma.js          # Figma → HTML sync script
├── figma-export.json           # Generated export data
├── figma-plugin/               # Figma plugin for importing
│   ├── manifest.json
│   ├── ui.html
│   └── code.js
└── utils/
    ├── html-parser.js
    ├── figma-api.js
    └── token-mapper.js
```

## 🎨 Design Tokens

The `design-tokens.json` file contains:

### Colors
- `white`: #ffffff
- `near-black`: #111111
- `mid-grey`: #6e6e73
- `light-grey`: #f5f5f7
- `accent`: #0071e3
- `accent-light`: #5e9dff

### Gradients
- `gradient-1`: Purple gradient (667eea → 764ba2)
- `gradient-2`: Pink gradient (f093fb → f5576c)
- `gradient-3`: Cyan gradient (4facfe → 00f2fe)

### Typography
- Font: Inter (300, 400, 500, 600, 700)
- H1: 3rem - 6rem (responsive)
- H2: 2rem - 4rem
- H3: 1.5rem - 2.5rem
- Body: 1.25rem

### Spacing
- XS: 0.5rem (8px)
- SM: 1rem (16px)
- MD: 2rem (32px)
- LG: 3rem (48px)
- XL: 4rem (64px)
- 2XL: 6rem (96px)
- 3XL: 8rem (128px)

## 🔄 Two-Way Sync Workflow

```
┌─────────────────────┐
│  T3000_Master_Deck  │
│      .html          │
└──────────┬──────────┘
           │
           │ figma-export.js
           ▼
┌─────────────────────┐
│   figma-export      │
│      .json          │
└──────────┬──────────┘
           │
           │ Figma Plugin
           ▼
┌─────────────────────┐
│   Figma File        │
│   (Edit here!)      │
└──────────┬──────────┘
           │
           │ Export .fig / REST API
           ▼
┌─────────────────────┐
│  sync-from-figma.js │
│   (Parse changes)   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  T3000_Master_Deck  │
│   .html (Updated!)  │
└─────────────────────┘
```

## 🛠️ Advanced Usage

### Custom Slide Sizes

Edit `figma-export.js`:

```javascript
const CONFIG = {
  slideWidth: 1920,  // Change to your size
  slideHeight: 1080,
  // ...
};
```

### Component Variants

Create component variants in Figma for:
- Stat cards (different metrics)
- Timeline items (different years)
- Team member cards (different people)
- Feature cards (different features)

### Animation Specifications

Animations are preserved in HTML via classes:
- `.fade-in` - Fade in on scroll
- `.slide-in-left` - Slide from left
- `.slide-in-right` - Slide from right
- `.scale-in` - Scale up
- `.stagger-container` - Stagger children

When syncing from Figma, ensure these classes are maintained.

## 🐛 Troubleshooting

### "FIGMA_API_TOKEN not set"
```bash
export FIGMA_API_TOKEN="figd_your_token_here"
```

### "Cannot find T3000_Master_Deck.html"
Ensure you're running from the T3000 directory:
```bash
cd "/Users/mac/Documents/Coding /T3000"
```

### Plugin not appearing in Figma
1. Ensure plugin is published or in development mode
2. Check manifest.json is valid
3. Restart Figma

### Sync loses animations
Check that CSS classes are preserved in the sync process. Edit `sync-from-figma.js` to map Figma layer names to animation classes.

## 📚 Resources

- [Figma REST API Docs](https://www.figma.com/developers/api)
- [Figma Plugin API](https://www.figma.com/plugin-docs/)
- [Design Tokens Spec](https://design-tokens.github.io/community-group/format/)
- [T3000 Deck Documentation](../FINAL_SUMMARY.md)

## 🆘 Support

Questions? Check:
1. [FINAL_SUMMARY.md](../FINAL_SUMMARY.md) - Current deck status
2. [HANDOFF_STATUS.md](../HANDOFF_STATUS.md) - Development history
3. ClaudeFlow memory: `npx @claude-flow/cli@latest memory search --query "figma"`

---

**Last Updated**: February 3, 2026
**Version**: 1.0.0
**Status**: 🚧 In Development
