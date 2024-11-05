export default {
  components: true,
  head: {
    title: "Nuxt Photo Slideshow",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Archivo+Black'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Domine:wght@600'
      }
    ],
  },
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss"],
  image: {
    // domains: ["https://images.unsplash.com", "https://source.unsplash.com"],

  },
  target: 'static'
};
