import type { Request, Response, NextFunction } from 'express';

// Extend Express Request type to include token
declare global {
    namespace Express {
        interface Request {
            token?: string;
            user?: any;
        }
    }
}

/**
 * Middleware to extract JWT token from request headers
 * and attach it to the request object for downstream services
 */
export const tokenExtractorMiddleware = (
    req: Request,
    _res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers.authorization;
        
        if (authHeader && authHeader.startsWith('Bearer ')) {
            // Extract token from "Bearer <token>"
            const token = authHeader.substring(7);
            req.token = token;
        }
        
        // Also check cookies if token not in header
        if (!req.token && req.cookies?.token) {
            req.token = req.cookies.token;
        }
        
        next();
    } catch (error) {
        next(error);
    }
};
