// https://v3.nuxtjs.org/api/configuration/nuxt.config
import AntD from "ant-design-vue";
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/style-resources'],
  svg: {
    vueSvgLoader: {
      // vue-svg-loader options
    },
    svgSpriteLoader: {
      // svg-sprite-loader options
    },
    fileLoader: {
      // file-loader options
    }
  },
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    // SCSS file in the project
    '~/assets/css/main.scss'
  ],
  plugins: ['~/plugins/antd-ui'],
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
