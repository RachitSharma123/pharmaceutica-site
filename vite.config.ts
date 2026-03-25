import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// Set VITE_BASE_PATH to your GitHub repo name e.g. /pharmaceutica-site/
// Leave empty for custom domain or root deployment
export default defineConfig({
  base: process.env.VITE_BASE_PATH || './',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
