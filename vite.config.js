export default {
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        answerApi: "answerApi/index.html",
        conversational: "conversational/index.html",
      },
    },
  },
};
