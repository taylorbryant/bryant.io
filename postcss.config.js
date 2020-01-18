/* eslint-env node */
module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    ...(process.env.NODE_ENV === `production`
      ? {
          "@fullhuman/postcss-purgecss": {
            content: [`./src/**/*.js`],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          },
          autoprefixer: {}
        }
      : {})
  }
};
