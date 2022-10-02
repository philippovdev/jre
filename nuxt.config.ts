// https://v3.nuxtjs.org/api/configuration/nuxt.config
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/style-resources'],
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    // SCSS file in the project
    '~/assets/css/main.scss'
  ],
  build: {
    loaders: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  vite: {
    plugins: [svgLoader()]
  }
})
