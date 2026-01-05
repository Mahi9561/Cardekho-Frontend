export class RuntimeError extends Error {
    public status;

    public innerError;

    constructor(message: string, error: Error) {
        super(message);
        this.status = 500;
        this.name = 'RuntimeError';
        this.innerError = error;
    }
}

export class ClientInputError extends Error {
    public status;

    constructor(message: string) {
        super(message);
        this.status = 400;
        this.name = 'ClientInputError';
    }
}

export class NotFoundError extends Error {
    public status;

    constructor(message: string) {
        super(message || 'Not found');
        this.status = 404;
        this.name = 'NotFoundError';
    }
}

export class TokenExpiredError extends Error {
    public status;

    constructor(message: string) {
        super(message || 'Token expired');
        this.status = 401;
        this.name = 'TokenExpiredError';
    }
}

export class AxiosError extends Error {
    constructor(err: Error, message: string) {
        const newMessage = message || err?.message;

        super(newMessage);

        // Maintains proper stack trace for where our error was thrown
        Error.captureStackTrace(this, AxiosError);

        this.name = 'AxiosError';
        this.stack = err?.stack || '';
    }
}

export class NotAuthorizedError extends Error {
    public status;

    constructor(message?: string) {
        super(message || 'Authorization request header is missing or invalid');
        this.status = 401;
        this.name = 'NotAuthorizedError';
    }
}

export class ForbiddenError extends Error {
    public status;

    constructor(message?: string) {
        super(message || 'Access not allowed for this resource');
        this.status = 403;
        this.name = 'ForbiddenError';
    }
}
export class ConflictError extends Error {
    public status;

    constructor(error: Error) {
        super(error instanceof Error ? error.message : error);
        this.status = 409;
        this.name = error.name || 'ConflictError';
        this.stack = error.stack;
    }
}
