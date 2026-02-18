import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "local.fleet.transight.net",
    port: 5173,
    https: {
      key: fs.readFileSync("./local.fleet.transight.net+2-key.pem"),
      cert: fs.readFileSync("./local.fleet.transight.net+2.pem"),
    },
    proxy: {
      "/api": {
        target: "https://apitest.fleet.transight.net",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
