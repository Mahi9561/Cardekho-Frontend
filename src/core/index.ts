import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import appWrapper from './app';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV !== 'production') {
    const envPath = path.join(__dirname, '..', '..', '.env');
    dotenv.config({
        path: envPath,
    });
}

const port = parseInt(process.env.API_CORE_PORT as string, 10) || 6000;

const startServer = async () => {
    try {
        const app = await appWrapper();
        app.set('port', port);

        http.createServer(app).listen(port, () => {
            console.log(`🚀 Server is running on port ${port}`);
            console.log(`📡 API available at http://localhost:${port}/api`);
        });
    } catch (error: any) {
        if (error.syscall !== 'listen') {
            throw error;
        }

        // Handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                console.error(`❌ Port ${port} requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`❌ Port ${port} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    }
};

startServer();
