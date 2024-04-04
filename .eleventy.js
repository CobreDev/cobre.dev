module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/img/*");
  eleventyConfig.addPassthroughCopy("src/assets/notes/*");
  eleventyConfig.ignores.add("src/links/index.liquid");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    passthroughFileCopy: true
  };
};