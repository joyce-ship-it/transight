import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "local.fleet.transight.net",
    port: 5173,
    https: {
      key: fs.readFileSync("./local.fleet.transight.net+2-key.pem"),
      cert: fs.readFileSync("./local.fleet.transight.net+2.pem"),
    },
  },
});
