// Mycelium AI — Behavior Capture Worker
interface Seed { id: string; name: string; prompt: string; response: string; model: string; settings: Record<string,unknown>; captured: number; tags: string[] }
interface Env { SEEDS: KVNamespace }
export default { async fetch(req: Request, env: Env) { const url = new URL(req.url); if (req.method === 'OPTIONS') return new Response(null, { headers: { 'Access-Control-Allow-Origin': '*' } }); if (url.pathname === '/' && req.method === 'GET') return new Response('<h1>Mycelium AI</h1><p>Behavior Capture as Seeds</p>', { headers: { 'Content-Type': 'text/html' } }); return new Response('Not found', { status: 404 }); } };
