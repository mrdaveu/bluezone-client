module.exports = function(eleventyConfig) {
   eleventyConfig.addPassthroughCopy("stylesheet.css");
   eleventyConfig.addPassthroughCopy("./photos/");
};
