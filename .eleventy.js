module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/*");
  eleventyConfig.ignores.add("src/links/index.liquid");
  eleventyConfig.ignores.add("src/extracurriculars/powerlifting.liquid");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    passthroughFileCopy: true
  };
};