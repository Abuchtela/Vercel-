#!/bin/bash
# Full First Activity Script for Base Builder Rewards (Safe version)
# Author: abuchtela.base.eth

# --- 1️⃣ Update README.md with timestamp ---
echo "First Builder Reward activity: $(date)" >> README.md

# --- 2️⃣ GitHub commit & push ---
git add README.md
git commit -m "First activity: update README for Builder Rewards"
git push origin main
echo "✅ README updated and pushed. Workflow triggered automatically."

# --- 3️⃣ Wait a few seconds for workflow to start ---
echo "⏳ Waiting 20 seconds..."
sleep 20

# --- 4️⃣ Publish Farcaster Frame ---
FRAME_FILE="./frames/frame.js"
if [ -f "$FRAME_FILE" ]; then
  echo "📡 Publishing frame via Warpcast... (make sure warpcast CLI is logged in)"
  warpcast frame publish "$FRAME_FILE"     --title "Base Builder Starter First Activity"     --description "Testing my first Base Builder Reward frame"     --wallet "0x3e3b9053af3132c2fd7a9def68f3b8d4be92ed58"     --public || echo "Warpcast publish failed or CLI not installed"
  echo "✅ Frame published (or attempted)."
else
  echo "⚠️ Frame file not found at $FRAME_FILE"
fi

echo "🎉 All first activity steps completed. Check Builder Rewards dashboard in 24–48h."
