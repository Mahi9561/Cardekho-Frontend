type NodeEnv = 'development' | 'test' | 'production';

interface AppConfig {
  env: NodeEnv;
  isDev: boolean;
  isTest: boolean;
  isProd: boolean;
  apiBaseUrl: string;
}

function str(v: unknown, fallback?: string): string {
  return typeof v === 'string' && v.trim().length > 0 ? v : fallback ?? '';
}

export const config: AppConfig = (() => {
  const mode = (import.meta.env.MODE as NodeEnv) || 'development';

  const apiBaseUrl = str(
    import.meta.env.VITE_API_BASE_URL,
    'http://localhost:6000'
  );

  return {
    env: mode,
    isDev: import.meta.env.DEV,
    isTest: mode === 'test',
    isProd: import.meta.env.PROD,
    apiBaseUrl,
  };
})();

export default config;
