import axios, { type AxiosInstance, type InternalAxiosRequestConfig } from 'axios';

// Create axios instance with default config
const runtimeEnv: Record<string, string | undefined> =
    ((import.meta as any)?.env as Record<string, string | undefined>) ??
    ((globalThis as any)?.process?.env as Record<string, string | undefined>) ??
    {};

const baseURL =
    runtimeEnv.VITE_API_BASE_URL ||
    runtimeEnv.VITEAPI_BASE_URL ||
    runtimeEnv.API_BASE_URL ||
    'http://localhost:5000';

const httpClient: AxiosInstance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor to add auth token
httpClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // Option 1: Use service account token (for backend-to-backend)
        const serviceToken =
            runtimeEnv.VITE_SERVICE_ACCOUNT_TOKEN || runtimeEnv.SERVICE_ACCOUNT_TOKEN;
        
        // Option 2: Get token from request context (passed from middleware)
        const requestToken = (config as any).userToken;
        
        const token = requestToken || serviceToken;
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle errors
httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            const { status, data } = error.response;
            
            switch (status) {
                case 401:
                    console.error('Unauthorized: Invalid or expired token');
                    break;
                case 403:
                    console.error('Forbidden: Insufficient permissions');
                    break;
                case 404:
                    console.error('Not Found:', data?.message || error.message);
                    break;
                case 500:
                    console.error('Server Error:', data?.message || error.message);
                    break;
                default:
                    console.error(`Error ${status}:`, data?.message || error.message);
            }
        } else if (error.request) {
            console.error('Network Error: No response received');
        } else {
            console.error('Request Error:', error.message);
        }
        
        return Promise.reject(error);
    }
);

export default httpClient;
