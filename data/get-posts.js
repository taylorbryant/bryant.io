const fs = require("fs");
const path = require("path");

const META = /export\s+const\s+meta\s+=\s+(\{(\n|.)*?\n\})/;
const DIR = path.join(process.cwd(), "./pages/blog/");
const files = fs
  .readdirSync(DIR)
  .filter(file => file.endsWith(".md") || file.endsWith(".mdx"));

module.exports = files
  .map(file => {
    const name = path.join(DIR, file);
    const contents = fs.readFileSync(name, "utf8");
    const match = META.exec(contents);
    if (!match || typeof match[1] !== "string")
      throw new Error(`${name} needs to export const meta = {}`);

    const meta = eval("(" + match[1] + ")");

    return {
      ...meta,
      path: "/blog/" + file.replace(/\.mdx?$/, "")
    };
  })
  .filter(meta => meta.published)
  .sort(
    (currentPost, nextPost) =>
      new Date(currentPost.date) - new Date(nextPost.date)
  );
