import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import eslint from "vite-plugin-eslint"
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    open: true,
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
  resolve: {
    alias: [
      { find: "@shared", replacement: path.resolve(__dirname, "src/shared") },
      {
        find: "@entities",
        replacement: path.resolve(__dirname, "src/entities"),
      },
      {
        find: "@features",
        replacement: path.resolve(__dirname, "src/features"),
      },
      {
        find: "@widgets",
        replacement: path.resolve(__dirname, "src/widgets"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "src/pages"),
      },
      {
        find: "@app",
        replacement: path.resolve(__dirname, "src/app"),
      },
    ],
  },
})
