/*eslint-env node*/
require(`dotenv`).config();
const rehypePrism = require(`@mapbox/rehype-prism`);
const withCSS = require(`@zeit/next-css`);
const withMDX = require(`@next/mdx`)({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism]
  }
});

module.exports = withCSS(
  withMDX({
    pageExtensions: [`js`, `jsx`, `md`, `mdx`],
    publicRuntimeConfig: {
      GITHUB_API_TOKEN: process.env.GITHUB_API_TOKEN
    }
  })
);
