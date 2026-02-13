#!/bin/bash

echo "🎨 Starting T-3000 Design Session..."

# Navigate to project directory
cd "/Users/mac/Documents/Coding /T3000/"

# Check if server is already running on port 8081
if lsof -Pi :8081 -sTCP:LISTEN -t >/dev/null ; then
    echo "✅ Server already running on http://localhost:8081"
else
    echo "🚀 Starting local server..."
    python3 -m http.server 8081 --bind localhost > /dev/null 2>&1 &
    sleep 2
    echo "✅ Server started on http://localhost:8081"
fi

# Open VS Code with optimal settings
echo "🔧 Opening VS Code with design-optimized settings..."
code . -g T3000_Master_Deck.html:15  # Opens file at line 15 (color system)

# Open browser to the deck
echo "🌐 Opening browser preview..."
open "http://localhost:8081/T3000_Master_Deck.html"

echo ""
echo "🎯 Design Session Ready!"
echo "────────────────────────"
echo "📝 Edit: T3000_Master_Deck.html in VS Code"
echo "👀 Preview: http://localhost:8081/T3000_Master_Deck.html" 
echo "🎨 Start at: Line 15 (color system) or Line 50 (typography)"
echo ""
echo "Key Edit Locations:"
echo "  • Lines 15-25:  Color Variables"
echo "  • Lines 50-90:  Typography System"  
echo "  • Lines 150+:   Visual Effects"
echo "  • Search 'clamp(' for responsive sizing"
echo ""
echo "💡 Tip: Use ⌘+G in VS Code to jump to line numbers"
echo "💡 Save with ⌘+S, browser auto-refreshes"
echo ""
echo "Happy designing! 🚀"