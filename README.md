# Mycelium AI

Capture an AI behavior as a seed — one prompt plus one seed yields a reproducible action. Mycelium is a Cocapn Fleet node that archives specific AI outputs into portable, reproducible seeds you can retrieve and run later.

**Live Public Instance:** https://mycelium-ai.casey-digennaro.workers.dev

## Why This Exists
You lose useful AI interactions daily. You adjust a prompt, get a perfect result, then cannot recreate it days later. This stops that. No accounts, no tracking, just reproducible snapshots of the exact state that worked for you.

## Quick Start

1.  **Fork** this repository.
2.  **Deploy** to Cloudflare Workers: `npx wrangler deploy`
3.  **Customize** your seed schema in `lib/seed-loader.js`.

Your private instance is ready in under two minutes. No database setup or external APIs are required.

## How It Works

A stateless Cloudflare Worker writes seeds to KV storage. On each write, it performs a simple similarity check against existing entries using a basic string comparison algorithm. If the similarity exceeds a set threshold, it creates a graph edge between the seeds.

## Features
- **Reproducible Seeds**: Store a prompt, context, and full model parameters. Retrieve the same output months later.
- **Automatic Graph Linking**: Seeds link based on content similarity when saved, without manual tagging.
- **Portable Data**: Every seed is plain JSON. Export your entire graph at any time.
- **Extensible Schema**: Modify what you store in one file without a rebuild.
- **Private by Default**: This runs on your worker. Your seeds remain private unless you share them.
- **Edge Native**: Runs on Cloudflare Workers with zero runtime dependencies.
- **Fork-First**: You own your instance and your data.

## Limitations
The built-in similarity check uses a basic string comparison algorithm. It is not as accurate as modern embedding models and may produce false positives or miss subtle similarities. It is designed for small to medium-sized datasets (up to 10,000 seeds).

## Try It
Test seed capture, browse the public graph, or verify reproduction:
👉 https://mycelium-ai.casey-digennaro.workers.dev

## License
MIT

<div style="text-align:center;padding:16px;color:#64748b;font-size:.8rem"><a href="https://the-fleet.casey-digennaro.workers.dev" style="color:#64748b">The Fleet</a> &middot; <a href="https://cocapn.ai" style="color:#64748b">Cocapn</a></div>