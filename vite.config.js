import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app2",
      filename: "remoteEntry.js",
      exposes: {
        './App': './src/App', // Ensure this path is correct
      },
    }),
  ],
  server: {
    port: 5174, // Ensure the port matches the `remotes` in the container
  },
  build: {
    target: "esnext",
  },
});
