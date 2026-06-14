import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]);
  const candidates = [];
  if (clean === "/") candidates.push("index.html");
  else {
    candidates.push(clean.slice(1));
    if (!path.extname(clean)) candidates.push(`${clean.slice(1)}.html`);
  }
  for (const candidate of candidates) {
    const full = path.resolve(root, candidate);
    if (full.startsWith(root) && fs.existsSync(full) && fs.statSync(full).isFile()) return full;
  }
  return path.join(root, "404.html");
}

const server = http.createServer((req, res) => {
  const file = resolveFile(req.url || "/");
  const ext = path.extname(file);
  res.writeHead(file.endsWith("404.html") ? 404 : 200, {
    "content-type": types[ext] || "application/octet-stream",
  });
  fs.createReadStream(file).pipe(res);
});

server.listen(port, host, () => {
  console.log(`TheTools.World local server: http://${host}:${port}/`);
});
