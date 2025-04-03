import { defineConfig } from 'vite'
import deno from '@deno/vite-plugin'
import vue from '@vitejs/plugin-vue'
// import tailwindcss from 'tailwindcss/postcss'
import autoprefixer from 'autoprefixer'
import path from "node:path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [deno(), vue()],
  css: {
    postcss: {
      plugins: [
        // tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Define @ como la carpeta src
    },
    extensions: ['.ts', '.vue', '.json'],
  },
});