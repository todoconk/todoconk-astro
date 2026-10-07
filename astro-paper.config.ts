// astro-paper.config.ts
import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://todoconk.com/",
    title: "TodoConK",
    description: "Inspiración, proyectos, memorias y más.",
    author: "todoconk",
    profile: "https://todoconk.com/",
    ogImage: "default-og.jpg", // reemplazar en /public más adelante
    lang: "es",
    timezone: "America/Santiago",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false, // sin url porque no hay repo público del contenido todavía
    },
    search: "pagefind", // buscador estático — este campo faltaba y probablemente rompía el tipo
  },
  // TODO: agregar redes reales cuando estén definidas.
  socials: [],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
