const defaultTheme = require(`tailwindcss/defaultTheme`);

module.exports = {
  purge: { content: [`./components/**/*.js`, `./pages/**/*.js`] },
  theme: {
    extend: {
      fontFamily: { sans: [`Inter`, ...defaultTheme.fontFamily.sans] },
    },
  },
};
