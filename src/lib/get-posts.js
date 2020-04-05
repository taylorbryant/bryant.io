/*eslint-env node*/
const fs = require(`fs`);
const path = require(`path`);

const POST_META_REGEX = /export\s+const\s+meta\s+=\s+(\{(\n|.)*?\n\})/;

const postsDirectory = path.join(process.cwd(), `./src/pages/blog/`);
const mdxFiles = fs
  .readdirSync(postsDirectory)
  .filter((file) => file.endsWith(`.mdx`));

module.exports = mdxFiles
  .map((file) => {
    const name = path.join(postsDirectory, file);
    const contents = fs.readFileSync(name, `utf8`);
    const match = POST_META_REGEX.exec(contents);

    if (!match || typeof match[1] !== `string`)
      throw new Error(`${name} needs to export const meta = {}`);

    const meta = eval(`(` + match[1] + `)`);

    return {
      ...meta,
      route: `/blog/` + file.replace(/\.mdx?$/, ``),
    };
  })
  .filter((meta) => meta.isPublished)
  .sort(
    (currentPost, nextPost) =>
      new Date(currentPost.date) - new Date(nextPost.date)
  )
  .reverse();
