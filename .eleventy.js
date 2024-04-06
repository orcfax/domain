module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/_assets/css/");
    eleventyConfig.addWatchTarget("src/_assets/css/");
    eleventyConfig.addPassthroughCopy("src/_assets/images/");
    eleventyConfig.addPassthroughCopy({ "src/_assets/favicons": "/" });
    eleventyConfig.addPassthroughCopy("src/_assets/fonts/");
    eleventyConfig.addPassthroughCopy("src/_assets/js/");
    eleventyConfig.addPassthroughCopy("src/_assets/vendor/");
    eleventyConfig.addPassthroughCopy("src/CNAME");

    return {
      dir: {
        input: "src",
        output: "docs"
      }
    };
  };