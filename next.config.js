/*eslint-env node*/
require(`dotenv`).config();
const rehypePrism = require(`@mapbox/rehype-prism`);
const withMDX = require(`@next/mdx`)({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism],
  },
});

module.exports = withMDX({
  pageExtensions: [`js`, `md`, `mdx`],
  env: {
    GITHUB_API_TOKEN: process.env.GITHUB_API_TOKEN,
  },
});
