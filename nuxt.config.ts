// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography'
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  experimental: {
    asyncContext: false,
    asyncEntry: false,
    externalVue: false,
    treeshakeClientOnly: false,
    emitRouteChunkError: false,
    restoreState: false,
    inlineRouteRules: false,
    renderJsonPayloads: false,
    noVueServer: false,
    payloadExtraction: false,
    clientFallback: false,
    crossOriginPrefetch: false,
    viewTransition: false,
    writeEarlyHints: false,
    componentIslands: false,
    configSchema: false,
    respectNoSSRHeader: false,
    localLayerAliases: false,
    typedPages: false,
    watcher: 'parcel',
    sharedPrerenderData: false,
    scanPageMeta: false,
    cookieStore: false,
    buildCache: false
  },

  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxthq/studio', '@nuxt/content'],

  plugins: ["~/plugins/preline.client.ts"],

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
  }
})