/* eslint-env node */
module.exports = {
  "*.{js,css,md,mdx}": [`prettier --write`, `git add`],
  "*.js": [`eslint --fix`, `git add`]
};
