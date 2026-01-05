import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { type Request, type Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import errorHandlerMiddleware from './middlewares/error-handle-middleware';
import { tokenExtractorMiddleware } from './middlewares/token-extractor-middleware';
import indexRouter from './routers/index.route';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async () => {
    const app = express();

    // CORS configuration
    app.use(
        cors({
            origin: [
                /localhost/,
                /127\.0\.0\.1/,
            ],
            credentials: true,
        })
    );

    // Body parsing middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    
    // Extract JWT token from requests
    app.use(tokenExtractorMiddleware);

    // Serve static files from public directory
    app.use(express.static(path.join(__dirname, 'public')));

    // Serve React build files
    app.use(express.static(path.resolve(__dirname, '../../dist')));

    // Health check endpoint
    app.get('/api/health', (_req: Request, res: Response) => {
        res.status(200).json({
            status: 'ok',
            timestamp: new Date().toISOString(),
            service: 'cardekho-api',
        });
    });

    // API version endpoint
    app.get('/api/version', (_req: Request, res: Response) => {
        res.json({
            version: process.env.APP_VERSION || '1.0.0',
            environment: process.env.NODE_ENV || 'development',
        });
    });

    // API routes
    app.use('/api', indexRouter);

    // Error handling middleware
    app.use(errorHandlerMiddleware);

    // Catch-all route for React SPA (must be last)
    app.use((_req, res) => {
        const indexPath = path.join(__dirname, '../../dist', 'index.html');
        res.sendFile(indexPath, (err) => {
            if (err) {
                res.status(404).send('Frontend not built. Run `npm run build` first.');
            }
        });
    });

    return app;
};
