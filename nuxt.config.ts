// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  spaLoadingTemplate: false,
  app: {
    baseURL: "/",
    buildAssetsDir: "assets", // don't use "_" at the begining of the folder name to avoids nojkill conflict
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
