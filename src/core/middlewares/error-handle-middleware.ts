import type { Request, Response } from 'express';
import {
    NotAuthorizedError,
    ConflictError,
    AxiosError,
    NotFoundError,
} from '../utils/helpers/error-handler.ts';

export default (err: any, _req: Request, res: Response, next: Function) => {
        if (res.headersSent) {
            return next(err);
        }
        
        const { message, status = 500 } = err;
        const response: any = { message };
        
        if (status === 500) {
            response.message = 'Something went wrong.';
        }
        
        if (status === 409) {
            response.message = 'Duplicate';
        }
        
        return res.status(status).send(response);
    };

export const handleError = (err: any) => {
    const status = err?.response?.status;
    switch (status) {
        case 403: {
            throw new NotAuthorizedError(
                'Service credentials are missing or invalid'
            );
        }
        case 404: {
            throw new NotFoundError(err);
        }
        case 409: {
            throw new ConflictError(err);
        }
        default:
            throw new AxiosError(err, err.message);
    }
};
