/*eslint-env node*/
const fs = require(`fs`);
const path = require(`path`);

const metaRegEx = /export\s+const\s+meta\s+=\s+(\{(\n|.)*?\n\})/;
const directory = path.join(process.cwd(), `./pages/blog/`);
const files = fs.readdirSync(directory).filter(file => file.endsWith(`.mdx`));

module.exports = files
  .map(file => {
    const name = path.join(directory, file);
    const contents = fs.readFileSync(name, `utf8`);
    const match = metaRegEx.exec(contents);
    if (!match || typeof match[1] !== `string`)
      throw new Error(`${name} needs to export const meta = {}`);

    const meta = eval(`(` + match[1] + `)`);

    return {
      ...meta,
      path: `/blog/` + file.replace(/\.mdx?$/, ``)
    };
  })
  .filter(meta => meta.isPublished)
  .sort(
    (currentPost, nextPost) =>
      new Date(currentPost.date) - new Date(nextPost.date)
  )
  .reverse();
