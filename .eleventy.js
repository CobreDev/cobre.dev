module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/img/*");
  // Tailwind compiles src/assets/css/style.css into _site itself; copying the raw
  // file here would overwrite that output with unprocessed @tailwind directives.
  eleventyConfig.setServerOptions({ watch: ["_site/assets/css/**/*.css"] });
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