module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/css/");
    eleventyConfig.addWatchTarget("src/assets/css/");
    eleventyConfig.addPassthroughCopy("src/assets/images/");
    eleventyConfig.addPassthroughCopy({ "src/assets/favicons": "/" });
    eleventyConfig.addPassthroughCopy("src/assets/fonts/");
    eleventyConfig.addPassthroughCopy("src/assets/js/");
    eleventyConfig.addPassthroughCopy("src/assets/vendor/");
    eleventyConfig.addPassthroughCopy("src/CNAME");

    return {
      dir: {
        input: "src",
        output: "docs"
      }
    };
  };