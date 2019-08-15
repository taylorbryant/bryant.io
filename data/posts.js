/*eslint-env node*/
const preval = require(`babel-plugin-preval/macro`);

const posts = preval`
  module.exports = require('./get-posts.js');
`;

module.exports = posts;
