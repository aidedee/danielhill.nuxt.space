// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography'
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxthq/studio',
    '@nuxt/content'
  ],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet'
        }
      ]
    }
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography]
    }
  },
  content: {
    markdown: {
      anchorLinks: false,
    }
  },
  plugins: ["~/plugins/preline.client.ts"]
})