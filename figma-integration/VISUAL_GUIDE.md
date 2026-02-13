# T3000 Figma Integration - Visual Guide

## 🎨 Complete Workflow Visualization

```
╔═══════════════════════════════════════════════════════════════════╗
║                  T3000 FIGMA INTEGRATION WORKFLOW                  ║
╚═══════════════════════════════════════════════════════════════════╝

STEP 1: GET FIGMA TOKEN
┌──────────────────────────────────────────────────────────────────┐
│ 🔐 https://www.figma.com/developers/api#access-tokens            │
│                                                                   │
│ ┌─────────────────────────────────────────────────────────┐     │
│ │  Get personal access token                              │     │
│ │  Name: "T3000 Deck Integration"                         │     │
│ │  Token: figd_xxxxxxxxxxxxxxxxxxxxxxxxxxxx               │     │
│ └─────────────────────────────────────────────────────────┘     │
│                                                                   │
│ $ export FIGMA_API_TOKEN="figd_your_token_here"                  │
└──────────────────────────────────────────────────────────────────┘
                               ▼

STEP 2: EXPORT HTML → FIGMA
┌──────────────────────────────────────────────────────────────────┐
│ $ cd figma-integration                                            │
│ $ node figma-export.js                                            │
│                                                                   │
│ ┌────────────────────────────────────────────────────────┐       │
│ │ 🚀 Starting T3000 → Figma export...                    │       │
│ │ 📄 Parsing T3000_Master_Deck.html...                   │       │
│ │ ✅ Found 12 sections                                    │       │
│ │ 🎨 Generating Figma frames...                          │       │
│ │ ✅ Generated 12 slide frames                            │       │
│ │ ✅ Exported to: figma-export.json                       │       │
│ │ ✨ Export complete!                                     │       │
│ └────────────────────────────────────────────────────────┘       │
└──────────────────────────────────────────────────────────────────┘
                               ▼

STEP 3: IMPORT TO FIGMA (PLUGIN)
┌──────────────────────────────────────────────────────────────────┐
│ 🎨 Figma Desktop App                                              │
│                                                                   │
│ ┌────────────────────────────────────────────────────────┐       │
│ │ Plugins → Development → Import plugin from manifest    │       │
│ │ Select: figma-plugin/manifest.json                     │       │
│ │                                                         │       │
│ │ Run: T3000 Deck Importer                               │       │
│ │ ┌───────────────────────────────────────────────┐      │       │
│ │ │ 📋 Select figma-export.json                    │      │       │
│ │ │ ┌──────────────────────────────────────────┐  │      │       │
│ │ │ │ ✅ Loaded 12 slides from deck            │  │      │       │
│ │ │ └──────────────────────────────────────────┘  │      │       │
│ │ │ [Import to Figma]                             │      │       │
│ │ └───────────────────────────────────────────────┘      │       │
│ └────────────────────────────────────────────────────────┘       │
│                                                                   │
│ Creating slides: [████████████████] 100%                          │
│ ✅ Import complete! Created 12 slides.                            │
└──────────────────────────────────────────────────────────────────┘
                               ▼

STEP 4: EDIT IN FIGMA
┌──────────────────────────────────────────────────────────────────┐
│ ✨ Your Deck in Figma - Full Visual Editing                       │
│                                                                   │
│ ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐  │
│ │Slide│Slide│Slide│Slide│Slide│Slide│Slide│Slide│Slide│Slide│  │
│ │  1  │  2  │  3  │  4  │  5  │  6  │  7  │  8  │  9  │ 10  │  │
│ │ Hero│Prob │Soln │Demo │Mrkt │Biz  │Trac │Comp │Team │Fin  │  │
│ └─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘  │
│                                                                   │
│ 🎨 Edit Visually:                                                 │
│   ✅ Change colors with color picker                              │
│   ✅ Update text directly                                         │
│   ✅ Adjust spacing with drag & drop                              │
│   ✅ Rearrange sections                                           │
│   ✅ Add new slides                                               │
│   ✅ Modify layouts with auto-layout                              │
│   ✅ Create component variants                                    │
└──────────────────────────────────────────────────────────────────┘
                               ▼

STEP 5: SYNC FIGMA → HTML
┌──────────────────────────────────────────────────────────────────┐
│ $ export FIGMA_FILE_KEY="ABC123"  # From Figma URL               │
│ $ node sync-from-figma.js                                         │
│                                                                   │
│ ┌────────────────────────────────────────────────────────┐       │
│ │ 🔄 Starting Figma → HTML sync...                       │       │
│ │ ☁️  Fetching Figma file...                             │       │
│ │ ✅ Fetched: T3000 Pitch Deck                            │       │
│ │ 🎨 Generating HTML from Figma structure...             │       │
│ │ ✅ HTML generated                                       │       │
│ │ 💾 Creating backup...                                   │       │
│ │ ✅ Backup: T3000_Master_Deck_BACKUP_xxx.html            │       │
│ │ 📝 Writing updated HTML...                              │       │
│ │ ✅ Updated: T3000_Master_Deck.html                      │       │
│ │ ✨ Sync complete!                                       │       │
│ └────────────────────────────────────────────────────────┘       │
└──────────────────────────────────────────────────────────────────┘
                               ▼

RESULT: UPDATED HTML DECK
┌──────────────────────────────────────────────────────────────────┐
│ ✅ T3000_Master_Deck.html - UPDATED WITH FIGMA CHANGES            │
│                                                                   │
│ ✨ Preserved:                                                     │
│   ✅ Animations (fade-in, slide-in, scale-in)                     │
│   ✅ Scroll-snap behavior                                         │
│   ✅ Interactive counters                                         │
│   ✅ Glass morphism effects                                       │
│   ✅ Progress indicators                                          │
│                                                                   │
│ 🎨 Updated from Figma:                                            │
│   ✅ Text content                                                 │
│   ✅ Colors and styles                                            │
│   ✅ Layout and spacing                                           │
│   ✅ New sections added                                           │
└──────────────────────────────────────────────────────────────────┘
```

---

## 📐 Design System in Figma

```
╔═══════════════════════════════════════════════════════════════════╗
║                        DESIGN TOKENS                               ║
╚═══════════════════════════════════════════════════════════════════╝

COLORS
┌──────────────────────────────────────────────────────────────────┐
│ ⬜ white         #ffffff                                          │
│ ⬛ near-black    #111111                                          │
│ ◼️  mid-grey     #6e6e73                                          │
│ ◻️  light-grey   #f5f5f7                                          │
│ 🔵 accent        #0071e3                                          │
│ 💙 accent-light  #5e9dff                                          │
└──────────────────────────────────────────────────────────────────┘

GRADIENTS
┌──────────────────────────────────────────────────────────────────┐
│ 🟣 gradient-1    [#667eea ──────────► #764ba2]  Purple           │
│ 🩷 gradient-2    [#f093fb ──────────► #f5576c]  Pink             │
│ 🩵 gradient-3    [#4facfe ──────────► #00f2fe]  Cyan             │
└──────────────────────────────────────────────────────────────────┘

TYPOGRAPHY
┌──────────────────────────────────────────────────────────────────┐
│ Font: Inter                                                       │
│                                                                   │
│ H1 │ 96px  │ Bold (700)   │ -0.03em │ 1.05 line height          │
│ H2 │ 64px  │ SemiBold (600)│ -0.025em│ 1.1 line height           │
│ H3 │ 40px  │ SemiBold (600)│ -0.02em │ 1.2 line height           │
│ H4 │ 32px  │ SemiBold (600)│ -0.01em │ 1.3 line height           │
│ P  │ 20px  │ Regular (400) │ 0       │ 1.7 line height           │
└──────────────────────────────────────────────────────────────────┘

SPACING (8px base)
┌──────────────────────────────────────────────────────────────────┐
│ XS  │  8px  │ ▁                                                  │
│ SM  │ 16px  │ ▂                                                  │
│ MD  │ 32px  │ ▃                                                  │
│ LG  │ 48px  │ ▄                                                  │
│ XL  │ 64px  │ ▅                                                  │
│ 2XL │ 96px  │ ▆                                                  │
│ 3XL │ 128px │ ▇                                                  │
└──────────────────────────────────────────────────────────────────┘

EFFECTS
┌──────────────────────────────────────────────────────────────────┐
│ Glass Card   │ backdrop-blur(10px) + rgba opacity               │
│ Card Shadow  │ 0 1px 3px, 0 10px 40px (layered)                 │
│ Hover Shadow │ 0 4px 6px, 0 20px 60px (dramatic)                │
│ Border Radius│ 8px (sm), 12px (md), 16px (lg), 20px (xl)        │
└──────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Component Mapping

```
╔═══════════════════════════════════════════════════════════════════╗
║                   FIGMA ↔ HTML COMPONENTS                          ║
╚═══════════════════════════════════════════════════════════════════╝

STAT CARD
┌──────────────────────────────────────────────────────────────────┐
│ Figma Layer Name: "Stat Card"                                     │
│ ┌────────────────────────────────────────────────────────┐       │
│ │                                                         │       │
│ │              150%                                       │       │
│ │         Growth Rate                                     │       │
│ │   Year-over-year performance                            │       │
│ │                                                         │       │
│ └────────────────────────────────────────────────────────┘       │
│                                                                   │
│ HTML Output:                                                      │
│ <div class="card glass-card stat-card fade-in">                  │
│   <div class="metric" data-count="150">150%</div>                │
│   <h3>Growth Rate</h3>                                            │
│   <p>Year-over-year performance</p>                               │
│ </div>                                                            │
└──────────────────────────────────────────────────────────────────┘

TIMELINE ITEM
┌──────────────────────────────────────────────────────────────────┐
│ Figma Layer Name: "Timeline Item"                                │
│ ┌────────────────────────────────────────────────────────┐       │
│ │  ●─────  2024                                           │       │
│ │          First deployment                               │       │
│ └────────────────────────────────────────────────────────┘       │
│                                                                   │
│ HTML Output:                                                      │
│ <div class="timeline-item slide-in-left">                        │
│   <h4>2024</h4>                                                   │
│   <p>First deployment</p>                                         │
│ </div>                                                            │
└──────────────────────────────────────────────────────────────────┘

HERO SECTION
┌──────────────────────────────────────────────────────────────────┐
│ Figma Frame: "Hero Section" (1920x1080)                          │
│ ┌────────────────────────────────────────────────────────┐       │
│ │                                                         │       │
│ │                  T-3000                                 │       │
│ │         Interactive Installation                        │       │
│ │                                                         │       │
│ └────────────────────────────────────────────────────────┘       │
│                                                                   │
│ HTML Output:                                                      │
│ <section id="hero" class="parallax-container">                   │
│   <div class="parallax-bg"></div>                                │
│   <h1 class="fade-in">T-3000</h1>                                │
│   <p class="lead fade-in">Interactive Installation</p>           │
│ </section>                                                        │
└──────────────────────────────────────────────────────────────────┘
```

---

## 🔄 Animation Preservation

```
╔═══════════════════════════════════════════════════════════════════╗
║               ANIMATION CLASS KEYWORDS (IMPORTANT!)                ║
╚═══════════════════════════════════════════════════════════════════╝

Keep these in Figma layer names to preserve animations:

fade-in          │ Element fades in on scroll
─────────────────┼────────────────────────────────────
slide-in-left    │ Element slides from left
─────────────────┼────────────────────────────────────
slide-in-right   │ Element slides from right
─────────────────┼────────────────────────────────────
scale-in         │ Element scales up
─────────────────┼────────────────────────────────────
stagger          │ Children animate with delays
─────────────────┼────────────────────────────────────
magnetic         │ 3D hover effect

Example Figma Layer Names:
✅ "Hero Title fade-in"
✅ "Stat Card - Growth slide-in-left"
✅ "Feature List stagger"
✅ "CTA Button magnetic"
```

---

## 📱 Slide Structure

```
╔═══════════════════════════════════════════════════════════════════╗
║                     SLIDE LAYOUT (1920x1080)                       ║
╚═══════════════════════════════════════════════════════════════════╝

┌──────────────────────────────────────────────────────────────────┐
│ ←80px→                                                  ←80px→   │
│ ▲                                                            ▲   │
│ 80px                      CONTENT                         80px  │
│ ▼                                                            ▼   │
│ ← 1760px usable width →                                         │
│ ▲                                                                │
│ 920px                                                            │
│ usable                                                           │
│ height                                                           │
│ ▼                                                                │
└──────────────────────────────────────────────────────────────────┘

Layout Properties:
• Frame: 1920 x 1080px
• Padding: 80px all sides
• Auto-layout: VERTICAL
• Item spacing: 32px
• Align: CENTER
```

---

## 🎓 Figma Editing Tips

```
╔═══════════════════════════════════════════════════════════════════╗
║                       EDITING BEST PRACTICES                       ║
╚═══════════════════════════════════════════════════════════════════╝

DO ✅
─────────────────────────────────────────────────────────────────
• Use frames for slides (1920x1080)
• Enable auto-layout for responsive design
• Keep layer names descriptive
• Include animation keywords in names
• Use design tokens for consistency
• Test changes in browser after sync
• Create backups before major changes
• Commit to git after successful syncs

DON'T ❌
─────────────────────────────────────────────────────────────────
• Change frame sizes without updating config
• Remove animation keywords from layer names
• Flatten important groups
• Delete component structure
• Skip testing after sync
• Forget to backup before syncing
```

---

**Created:** February 3, 2026
**For:** T3000 Pitch Deck Figma Integration
**Status:** Ready to use! 🎨
