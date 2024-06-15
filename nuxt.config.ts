// https://nuxt.com/docs/api/configuration/nuxt-config
// import grapesjs from "grapesjs"
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  // tailwindcss: {
  //   plugins: ['daisyui']
  // }
})
