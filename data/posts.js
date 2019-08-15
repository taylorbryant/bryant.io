/* eslint-env node */
import preval from "babel-plugin-preval/macro";

const posts = preval`
  module.exports = require('./get-posts.js');
`;

module.exports = posts;
