/*eslint-env node*/
require(`dotenv`).config();
const withCSS = require(`@zeit/next-css`);
const withMDX = require(`@next/mdx`)({
  extension: /\.mdx?$/
});

module.exports = withCSS(
  withMDX({
    pageExtensions: [`js`, `jsx`, `md`, `mdx`],
    publicRuntimeConfig: {
      GITHUB_API_TOKEN: process.env.GITHUB_API_TOKEN
    }
  })
);
