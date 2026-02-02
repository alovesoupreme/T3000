# T3000 Quick Deploy Guide

## 🚀 Push to GitHub NOW (3 Steps)

### Step 1: Create GitHub Repo
Go to: https://github.com/new
- Repository name: `T3000`
- Visibility: Public or Private (your choice)
- Click "Create repository"

### Step 2: Push Your Code
```bash
cd "/Users/mac/Documents/Coding /T3000"

# Add your GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/T3000.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Access Remotely
Your deck is now available at:
- **GitHub repo**: `https://github.com/YOUR_USERNAME/T3000`
- **Direct file**: `https://github.com/YOUR_USERNAME/T3000/blob/main/T3000_Master_Deck.html`

To work remotely:
1. Clone on any device: `git clone https://github.com/YOUR_USERNAME/T3000.git`
2. Or download the HTML file directly from GitHub
3. Open `T3000_Master_Deck.html` in any browser

---

## 🌐 Alternative: Instant Live URL (No GitHub Needed)

### Option A: Netlify Drop (30 seconds, no signup)
```bash
# Just drag the file into browser at:
https://app.netlify.com/drop

# Drag: T3000_Master_Deck.html
# Get instant URL like: https://random-name-123.netlify.app
```

### Option B: Vercel (CLI, 1 minute)
```bash
cd "/Users/mac/Documents/Coding /T3000"
npm i -g vercel
vercel --prod

# Follow prompts, get instant URL
```

### Option C: GitHub Pages (Free hosting)
After pushing to GitHub:
1. Go to repo Settings → Pages
2. Source: Deploy from main branch
3. Get URL: `https://YOUR_USERNAME.github.io/T3000/T3000_Master_Deck.html`

---

## 📦 Download Package for Cloud Storage

```bash
cd "/Users/mac/Documents/Coding /T3000"

# Create ZIP with all essentials
zip -r T3000_Remote_Package.zip \
  T3000_Master_Deck.html \
  HANDOFF_STATUS.md \
  FINAL_SUMMARY.md \
  ENHANCEMENTS_LOG.md \
  REMOTE_WORK_GUIDE.md

# Upload to Dropbox/Google Drive/iCloud
```

---

## ✅ Recommended: GitHub + Netlify

**Best workflow for remote work:**

1. **Push to GitHub** (version control, backup, collaboration)
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/T3000.git
   git push -u origin main
   ```

2. **Deploy to Netlify** (live preview for investors)
   - Connect GitHub repo to Netlify
   - Auto-deploy on every push
   - Get clean URL: `https://t3000-pitch.netlify.app`

3. **Work from anywhere**
   - Clone repo on any device
   - Make changes
   - `git push` → auto-deploys to live URL

---

## 🔥 FASTEST: Run This Now

```bash
cd "/Users/mac/Documents/Coding /T3000"

# Interactive deploy script
./deploy.sh
```

Pick option 1 (GitHub) and follow the prompts!
