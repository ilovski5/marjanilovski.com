// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

const site = import.meta.env.PROD
  ? "https://marjanilovski.com"
  : "http://localhost:4321";

export default defineConfig({
  site,
  trailingSlash: "never",
  integrations: [sitemap(), icon()],
  vite: { plugins: [tailwindcss()] },
  build: { format: "file" },
  devToolbar: { enabled: false },
});
