import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  // For Vercel deployment, use empty base
  // For GitHub Pages, use repo name
  const base = env.VITE_REPO_NAME ? `/${env.VITE_REPO_NAME}/` : "/";

  return {
    base: base,
    plugins: [react(), tailwindcss()],
    build: {
      outDir: "dist",
      assetsDir: "assets",
      sourcemap: false,
      minify: "terser",
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
            router: ["react-router-dom"],
          },
        },
      },
    },
    server: {
      open: true,
      host: false, // Allow access from network devices
      proxy: {
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
          secure: true,
        },
      },
    },
  };
});
