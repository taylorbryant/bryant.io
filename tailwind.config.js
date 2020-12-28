module.exports = {
  purge: {
    content: [
      `./components/**/*.{js,jsx,ts,tsx,mdx}`,
      `./pages/**/*.{js,jsx,ts,tsx,mdx}`,
    ],
  },
  theme: {
    colors: {
      black: `black`,
      gray: `gray`,
      white: `white`,

      blue: `blue`,
      magenta: `magenta`,
    },
  },
};
