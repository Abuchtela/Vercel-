export default function handler(req, res) {
  res.json({
    type: "frame",
    title: "Base Builder Starter First Activity",
    description: "Testing my first Base Builder Reward frame",
    buttons: [
      { label: "Yes 🚀" },
      { label: "No ❌" }
    ]
  })
}
