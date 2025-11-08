import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Tailwind 4 runs automatically through @import "tailwindcss" in your CSS;
// no Vite plugin or PostCSS config is needed.

export default defineConfig({
  plugins: [react()],
});
