import {
  defineConfig,
  envField,
  fontProviders,
  svgoOptimizer,
} from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import rehypeCallouts from "rehype-callouts";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { transformerFileName } from "./src/utils/transformers/fileName";
import config from "./astro-paper.config";

export default defineConfig({
  site: config.site.url,
  integrations: [
    mdx(),
    sitemap({
      filter: page =>
        config.features?.showArchives !== false || !page.endsWith("/archives/"),
    }),
  ],
  // CAMBIO: locale de en -> es, para que coincida con site.lang en astro-paper.config.ts
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    processor: unified({
      remarkPlugins: [
        remarkToc,
        [remarkCollapse, { test: "Table of contents" }],
      ],
      rehypePlugins: [rehypeCallouts],
    }),
    shikiConfig: {
      themes: { light: "min-light", dark: "night-owl" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerFileName({ style: "v2", hideDot: false }),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  // CAMBIO: se reemplazó "Google Sans Code" por las 3 tipografías
  // del sistema de diseño aprobado (Space Grotesk / IBM Plex Sans / IBM Plex Mono).
  // Los nombres de cssVariable coinciden con los usados en src/styles/theme.css.
  fonts: [
    {
      name: "Space Grotesk",
      cssVariable: "--font-heading",
      provider: fontProviders.google(),
      weights: [500, 600, 700],
      styles: ["normal"],
      fallbacks: ["system-ui", "sans-serif"],
    },
    {
      name: "IBM Plex Sans",
      cssVariable: "--font-body",
      provider: fontProviders.google(),
      weights: [400, 500, 600],
      styles: ["normal", "italic"],
      formats: ["woff2", "ttf"],
      fallbacks: ["-apple-system", "sans-serif"],
    },
    {
      name: "IBM Plex Mono",
      cssVariable: "--font-mono",
      provider: fontProviders.google(),
      weights: [400, 500],
      styles: ["normal"],
      fallbacks: ["ui-monospace", "monospace"],
    },
  ],
  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
});
