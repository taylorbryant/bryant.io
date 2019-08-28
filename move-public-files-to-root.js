/* eslint-env node */
const fs = require(`fs`);

fs.copyFile(`./public/_redirects`, `./out/_redirects`, err => {
  if (err) throw err;
  console.log(`_redirects was copied to ./out`);
});

fs.copyFile(`./public/sitemap.xml`, `./out/sitemap.xml`, err => {
  if (err) throw err;
  console.log(`sitemap.xml was copied to ./out`);
});
