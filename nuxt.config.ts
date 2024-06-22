// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  spaLoadingTemplate: false,
  app: {
    // use these for github pages deploy
    baseURL: "/music/",
    buildAssetsDir: "/assets",

    // use this for netifly deploy
    // buildAssetsDir: "~/assets",
  },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: [300, 500, 700],
        },
      },
    ],
  ],
});
