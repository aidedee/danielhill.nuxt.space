import _Highlight from 'C:/Users/danielhill/Desktop/GitHub/danielhill.nuxt.space/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.js'

export const remarkPlugins = {
}

export const rehypePlugins = {
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":{"default":"everforest-light","dark":"everforest-dark"}}