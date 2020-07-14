const defaultTheme = require(`tailwindcss/defaultTheme`);

module.exports = {
  purge: {
    content: [`./components/**/*.js`, `./pages/**/*.js`],
    whitelistPatterns: [/blue$/, /red$/, /indigo$/, /green$/],
  },
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
  plugins: [require(`@tailwindcss/typography`)],
};
