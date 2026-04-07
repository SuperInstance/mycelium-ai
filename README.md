# Mycelium AI 🍄

Capture and reproduce specific AI outputs you want to keep, reliably. Mycelium is a Cocapn Fleet node for archiving AI behavior into portable, reproducible seeds.

---

## Why this exists
You often get a useful, specific output from an AI, but struggle to get it again later. Mycelium lets you save that exact behavior—the prompt, the model parameters, the output—as a single, reproducible seed. It's a lightweight knowledge graph for the behaviors you choose to preserve.

**Live Public Instance:** https://mycelium-ai.casey-digennaro.workers.dev

---

## What it does
- **Reproducible Seeds**: Store a prompt, context, and model parameters. Retrieve the same output later. Designed for deterministic behavior where you control the variables.
- **Lightweight Knowledge Graph**: When you save a seed, it's automatically linked to existing seeds based on content similarity. You browse connections, not a flat list.
- **Fork First**: You deploy your own private instance. You own your data. Optionally, sync seeds with other trusted nodes on the Cocapn Fleet.
- **Edge Native**: Runs on Cloudflare Workers. Zero runtime dependencies. Stateless and cold-start safe.

---

## Key Features
- **Portable Seeds**: Each seed is a JSON object. Export your entire graph at any time.
- **Automatic Linking**: Silent, configurable similarity linking on write. No manual tagging required.
- **Extensible Schema**: Modify the seed structure in one file to add metadata like model versions or project tags.
- **Private by Default**: Your instance, your data. No central service or database.

---

## Try the Public Instance
Test seed capture, browse the public graph, or verify reproduction:
👉 https://mycelium-ai.casey-digennaro.workers.dev

---

## Quick Start
1. **Fork** this repository.
2. **Deploy** to Cloudflare Workers: `npx wrangler deploy`
3. **Configure** your seed schema in `lib/seed-loader.js`.

Your instance is ready. No database setup, no external APIs.

---

## How it works
A stateless Cloudflare Worker writes seeds to KV storage. On each write, it performs a lightweight similarity check against existing entries and creates graph edges for matches above a threshold. There is no background processing or external embedding service.

**One Limitation**: It only creates links between seeds when the similarity score exceeds a fixed threshold. Subtle or implicit connections won't appear.

---

## Contributing
Pull requests are welcome for graph logic, seed schema, or API improvements. All changes must remain dependency-free and stateless.

---

## License
MIT License.

Attribution: Superinstance & Lucineer (DiGennaro et al.)

---

<div align="center">
  <a href="https://the-fleet.casey-digennaro.workers.dev">The Fleet</a> · 
  <a href="https://cocapn.ai">Cocapn</a>
</div>