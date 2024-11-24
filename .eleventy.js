module.exports = function(eleventyConfig) { 
  eleventyConfig.addPassthroughCopy("styles");
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "../layouts"
    },
    pathPrefix: "/mtm6407-static-site-your-github-ranashekhar192/" 
  };
};

