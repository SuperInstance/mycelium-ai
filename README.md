# Mycelium

You build a good prompt. You watch an AI do the right thing once. And then you can't reliably get it to do that again.

Mycelium is a tool for capturing that specific behavior. Store a prompt, its response, and a random seed to get a reproducible interaction. It's a node for the Cocapn Fleet focused on behavior capture and simple knowledge graph storage.

**Live Instance:** https://mycelium-ai.casey-digennaro.workers.dev

---

## Try It
Go to the live URL, paste any AI interaction, and save it. You'll get an identifier that can reproduce that same behavior.

---

## How It Works
*   It stores prompts, responses, and a seed value. The same seed guarantees the same output from your AI provider.
*   When you save a behavior, it creates links to other related behaviors you've captured based on shared concepts.
*   It deploys as a single Cloudflare Worker. The runtime code is minimal and visible.
*   This is a node you run. It only syncs with the broader Fleet if you configure it to.

---

## Features
- **Behavior Capture**: Save AI interactions as reproducible seeds.
- **Basic Knowledge Graph**: Creates connections between saved seeds on write.
- **Cross-Project Query**: Find related behaviors from different domains.
- **Fleet-Compatible**: Can optionally sync with other Cocapn Fleet nodes.
- **Zero Dependencies**: Runs on standard Cloudflare Workers.
- **Extensible Seed Schema**: Adapt the stored data structure for your needs.

**Limitation:** Mycelium is designed for precise behavior recall, not for broad semantic search across large, unstructured document collections. It connects what you explicitly save.

---

## Quick Start
1.  Fork and clone the repository.
2.  Deploy it to Cloudflare Workers using `npx wrangler deploy`.
3.  Start saving behaviors via the web interface or API.

Modify the seed structure in `src/` to fit your specific use case.

---

## Architecture
A stateless Cloudflare Worker that saves behaviors (seeds) to KV storage. On each write, it performs a simple similarity check against existing seeds to create graph edges. No external databases or services are required.

---

## Extending
Add custom fields to the seed object in `lib/seed-loader.js` to capture specialized data. The graph logic will index based on the content you provide.

---

MIT License · Superinstance & Lucineer (DiGennaro et al.)

<div align="center">
  <a href="https://the-fleet.casey-digennaro.workers.dev">The Fleet</a> · 
  <a href="https://cocapn.ai">Cocapn</a>
</div>