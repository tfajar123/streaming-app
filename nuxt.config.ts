import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/fonts', '@nuxt/eslint', '@pinia/nuxt'],
  css: ['@/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  pinia: {
    storesDirs: ['~/stores'],
  },
});
