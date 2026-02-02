#!/bin/bash
# T3000 Quick Deploy Script

echo "🚀 T3000 Pitch Deck - Quick Deploy"
echo "=================================="
echo ""
echo "Choose deployment option:"
echo "1) Push to GitHub (recommended for remote work)"
echo "2) Deploy to Netlify (instant live URL)"
echo "3) Deploy to Vercel (instant live URL)"
echo "4) Create ZIP for manual upload"
echo ""
read -p "Enter option (1-4): " choice

case $choice in
  1)
    echo ""
    echo "📦 GitHub Setup"
    echo "Create a new repo at: https://github.com/new"
    echo "Name it: T3000"
    echo ""
    read -p "Enter your GitHub username: " username
    read -p "Enter repo name (default: T3000): " reponame
    reponame=${reponame:-T3000}
    
    git remote remove origin 2>/dev/null
    git remote add origin "https://github.com/$username/$reponame.git"
    git branch -M main
    git push -u origin main
    
    echo ""
    echo "✅ Pushed to GitHub!"
    echo "🌐 Access from anywhere: https://github.com/$username/$reponame"
    echo "📄 Direct link to deck: https://github.com/$username/$reponame/blob/main/T3000_Master_Deck.html"
    ;;
    
  2)
    echo ""
    echo "🌐 Deploying to Netlify Drop..."
    echo "1. Go to: https://app.netlify.com/drop"
    echo "2. Drag T3000_Master_Deck.html into the browser"
    echo "3. Get instant shareable URL"
    ;;
    
  3)
    echo ""
    echo "🚀 Deploying to Vercel..."
    npx vercel --prod
    ;;
    
  4)
    echo ""
    echo "📦 Creating deployment package..."
    zip -r T3000_Deck_Package.zip T3000_Master_Deck.html HANDOFF_STATUS.md FINAL_SUMMARY.md ENHANCEMENTS_LOG.md REMOTE_WORK_GUIDE.md
    echo "✅ Created: T3000_Deck_Package.zip"
    echo "Upload this to cloud storage or email to yourself"
    ;;
    
  *)
    echo "Invalid option"
    exit 1
    ;;
esac
