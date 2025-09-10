// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://soroushalinia.github.io",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ["en", "fa"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});
