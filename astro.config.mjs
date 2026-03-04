// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";

const site = import.meta.env.PROD
  ? "https://marjanilovski.com"
  : "http://localhost:4321";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
