import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Fix: Use '.' as the directory for loadEnv to avoid type error regarding process.cwd()
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    define: {
      // This is necessary to support process.env.API_KEY in the client-side code
      // configured via Vercel Environment Variables.
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});