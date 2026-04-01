# Mycelium AI — Behavior Capture as Seeds

> *One prompt + one seed = exact action, every time.*

## What It Is

Mycelium captures any AI behavior as a reusable seed. Show an agent how to do something once. Mycelium captures the full context — prompt, response, model settings, environmental state — and packages it as a seed. Anyone can run that seed and get the same behavior.

No code needed. Just show it once, then share the seed.

## The Concept

Seeds are the unit of reusable intelligence:
- **Capture**: Watch an agent perform a task, capture the full context
- **Package**: Compress into a minimal, portable seed file
- **Share**: Seeds are plain JSON, version-controlled in the repo
- **Run**: Any repo-native agent can load a seed and reproduce the behavior

## Integration with Cocapn

Mycelium seeds are how repo-native agents share skills:
1. Agent A performs a task well
2. Mycelium captures the behavior as a seed
3. Seed is committed to the repo
4. Agent B (in the same fleet or a fork) loads the seed
5. Agent B now has that skill

This is the i-know-kung-fu principle made practical.

## Status

📝 Specification phase. Core concept defined.

## Deploy

```bash
git clone https://github.com/Lucineer/mycelium-ai.git
cd mycelium-ai
npm install
npx wrangler dev
```

Author: Superinstance
