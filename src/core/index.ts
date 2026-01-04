// Minimal Node HTTP server for core (dev)
import { createServer } from 'node:http';

const PORT = Number(process.env.CORE_PORT || process.env.PORT || 6000);
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

const server = createServer((req, res) => {
	// Basic CORS
	res.setHeader('Access-Control-Allow-Origin', CLIENT_ORIGIN);
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Credentials', 'true');

	if (req.method === 'OPTIONS') {
		res.statusCode = 204;
		res.end();
		return;
	}

	if (req.url === '/health') {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({ status: 'ok' }));
		return;
	}

	if (req.url === '/api/ping') {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({ message: 'pong' }));
		return;
	}

	res.statusCode = 404;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({ error: 'Not Found' }));
});

server.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`[core] server listening on http://localhost:${PORT}`);
});
