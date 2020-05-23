/* eslint-env node */
const defaultTheme = require(`tailwindcss/defaultTheme`);

module.exports = {
  purge: [`./components/**/*.js`, `./pages/**/*.js`],
  theme: {
    extend: {
      fontFamily: {
        sans: [`Inter`, ...defaultTheme.fontFamily.sans],
      },
      margin: {
        9: `2.25rem`,
      },
      padding: {
        9: `2.25rem`,
      },
    },
  },
  variants: {},
  plugins: [],
};
