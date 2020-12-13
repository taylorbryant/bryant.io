module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    `eslint:recommended`,
    `plugin:import/recommended`,
    `plugin:jsx-a11y/recommended`,
    `plugin:mdx/recommended`,
    `plugin:react/recommended`,
    `plugin:react-hooks/recommended`,
    `plugin:prettier/recommended`,
    `prettier/react`,
  ],
  overrides: [
    {
      files: [`*.md`],
      rules: { "prettier/prettier": [2, { parser: `markdown` }] },
    },
    { files: [`*.mdx`], extends: [`plugin:mdx/overrides`] },
  ],
  parser: `babel-eslint`,
  plugins: [`simple-import-sort`],
  rules: {
    "jsx-a11y/anchor-is-valid": [
      `error`,
      {
        components: [`Link`],
        specialLink: [`hrefLeft`, `hrefRight`],
        aspects: [`invalidHref`, `preferButton`],
      },
    ],
    "jsx-a11y/click-events-have-key-events": `off`,
    "jsx-a11y/no-noninteractive-element-interactions": `off`,
    quotes: [`error`, `backtick`],
    "react/jsx-sort-props": `error`,
    "simple-import-sort/imports": `error`,
    "simple-import-sort/exports": `error`,
  },
  settings: { react: { version: `detect` } },
};
