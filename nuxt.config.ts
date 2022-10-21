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
      viewport: 'width=500, initial-scale=1',
      title: 'Операции с недвижимостью в России удаленно',
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
  generate: {
    fallback: true
  },
  vite: {
    plugins: [svgLoader(), gzipPlugin()]
  }
})
