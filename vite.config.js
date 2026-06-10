export default {
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        advancedSearch: "advancedSearch/index.html",
        contextSearch: "contextSearch/index.html",
        staticFilter: "staticFilter/index.html",
        answerApi: "answerApi/index.html",
        searchApi: "searchApi/index.html",
        conversationalProd: "conversationalProd/index.html",
      },
    },
  },
};
