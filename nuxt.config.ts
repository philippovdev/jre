// https://v3.nuxtjs.org/api/configuration/nuxt.config
import svgLoader from 'vite-svg-loader';
import gzipPlugin from 'rollup-plugin-gzip'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=3',
      title: 'Операции с недвижимостью в России удаленно',
      script: [
        {
          src: "//code.jivo.ru/widget/LW5jAzVGhh",
          async: true
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'android-chrome', sizes: '192x192', href: '/android-chrome-192x192.png' },
        { rel: 'android-chrome', sizes: '512x512', href: '/android-chrome-512x512.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      meta: [
        {
          name: 'description',
          content: 'Продажа недвижимости в России удаленно. Любые операции с недвижимостью в Москве и Санкт-Петербурге удаленно.'
        },
        {
          name: 'og:site_name',
          content: 'JRE.ru - недвижимость в России удаленно'
        },
        {
          name: 'og:title',
          content: 'JRE.ru - операции с недвижимость в России удаленно, конфиденциально и безопасно'
        },
        {
          name: 'og:description',
          content: 'Продажа недвижимости в России удаленно. Любые операции с недвижимостью в Москве и Санкт-Петербурге удаленно.'
        },
        {
          name: 'og:image',
          itemprop: 'image',
          content: '/meta-image-256x256.jpg'
        },
        {
          name: 'og:image:width',
          content: '256'
        },
        {
          name: 'og:image:height',
          content: '256'
        },
        {
          name: 'og:type',
          content: 'website'
        },
        {
          name: 'og:updated_time',
          content: Date.now()
        }
      ],
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/style-resources'],
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    // SCSS file in the project
    '~/assets/css/main.scss'
  ],
  target: "static",
  build: {
    loaders: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  vite: {
    plugins: [svgLoader(), gzipPlugin()]
  }
})
