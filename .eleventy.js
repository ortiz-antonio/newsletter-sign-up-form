import eleventyPluginWebC from "@11ty/eleventy-plugin-webc";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";


export default function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.setWatchThrottleWaitTime(100);

  eleventyConfig.addPassthroughCopy("src/assets");


  eleventyConfig.addWatchTarget("src/**/*.webc");
  eleventyConfig.addWatchTarget("src/design-system/*.js");

  eleventyConfig.addPlugin(eleventyPluginWebC, {
    components: ["src/_includes/components/**/*.webc"],
  });
  return {
    pathPrefix: "/newsletter-sign-up-form/",
    dir: {
      input: "src",
      output: "dist",
      layouts: "_includes/layouts",

    },
    markdownTemplateEngine: "webc",
    htmlTemplateEngine: "webc",
  };
};