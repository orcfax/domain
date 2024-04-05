module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addWatchTarget("src/css/");
    eleventyConfig.addPassthroughCopy("src/images/");
    eleventyConfig.addPassthroughCopy({ "src/favicons": "/" });
    eleventyConfig.addPassthroughCopy("src/fonts/");
    eleventyConfig.addPassthroughCopy("src/js/");
    eleventyConfig.addPassthroughCopy("src/vendor/");
    eleventyConfig.addPassthroughCopy("src/CNAME");

    return {
      dir: {
        input: "src",
        output: "docs"
      }
    };
  };