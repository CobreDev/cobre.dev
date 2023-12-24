module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/img/*");
  eleventyConfig.addPassthroughCopy("src/assets/notes/*");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    passthroughFileCopy: true
  };
};