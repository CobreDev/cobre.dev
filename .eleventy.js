module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/img/*");
  eleventyConfig.addPassthroughCopy("src/assets/css/*");
  eleventyConfig.addPassthroughCopy({ "src/assets/favicon": "/" });
  eleventyConfig.ignores.add("src/now/index.liquid");
  eleventyConfig.ignores.add("src/extracurriculars/powerlifting.liquid");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    passthroughFileCopy: true
  };
};