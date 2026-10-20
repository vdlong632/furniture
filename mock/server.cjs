const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.MOCK_PORT) || 3001;
const DB_PATH = path.join(__dirname, 'db.json');

const readDb = () => JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));

const send = (res, status, body) => {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  });
  res.end(status === 204 ? undefined : JSON.stringify(body));
};

const routes = [
  [/^\/api\/products$/, (db) => db.products],
  [/^\/api\/products\/slug\/([^/]+)$/, (db, slug) => db.products.find((p) => p.slug === slug)],
  [/^\/api\/blogs$/, (db) => db.blogs],
  [/^\/api\/blogs?\/slug\/([^/]+)$/, (db, slug) => db.blogs.find((b) => b.slug === slug)]
];

const server = http.createServer((req, res) => {
  if (req.method === 'OPTIONS') return send(res, 204);
  if (req.method !== 'GET') return send(res, 405, { message: 'Method not allowed' });

  const { pathname } = new URL(req.url, `http://${req.headers.host}`);
  for (const [pattern, handler] of routes) {
    const match = pathname.match(pattern);
    if (!match) continue;
    const data = handler(readDb(), ...match.slice(1).map(decodeURIComponent));
    return data === undefined ? send(res, 404, { message: 'Not found' }) : send(res, 200, data);
  }
  send(res, 404, { message: 'Not found' });
});

server.listen(PORT, () => {
  console.log(`Mock API running at http://localhost:${PORT}/api`);
});
