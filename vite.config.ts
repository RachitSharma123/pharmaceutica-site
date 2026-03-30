import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// Default to root (/) for Vercel/custom-domain deployments.
// Override with VITE_BASE_PATH (e.g. /pharmaceutica-site/) when deploying to a subpath.
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
