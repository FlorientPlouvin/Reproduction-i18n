// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/test-utils/module",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/device",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
    "nuxt-auth-utils",
    "nuxt-snackbar",
    "@nuxtjs/seo",
    "vue3-carousel-nuxt",
  ],

  typescript: {
    typeCheck: true,
    strict: true,
  },

  tailwindcss: {
    cssPath: "~/assets/scss/styles.scss",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },

  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
      },
      {
        code: "fr",
        iso: "fr-FR",
        name: "Français",
      },
      {
        code: "cn",
        iso: "zh-CN",
        name: "简体中文",
      },
    ],
    defaultLocale: "fr",
  },

  vite: {
    server: {
      hmr: { host: "0.0.0.0" },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
        },
      },
    },
  },

  routeRules: {
    "/account/login": { ssr: false },
  },

  snackbar: {
    bottom: true,
    right: true,
    duration: 5000,
  },

  piniaPersistedstate: {
    cookieOptions: {
      maxAge: 2 * 24 * 60 * 60,
    },
  },

  compatibilityDate: "2024-10-07",
});
