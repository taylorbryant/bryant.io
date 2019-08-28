/* eslint-env node */
const fs = require(`fs`);
const fsPromises = fs.promises;

fsPromises
  .copyFile(`./public/_redirects`, `./out/_redirects`)
  .then(() => console.log(`_redirects was copied to ./out`))
  .catch(() => console.error(`Error: _redirects could not be moved to ./out`));

fsPromises
  .copyFile(`./public/sitemap.xml`, `./out/sitemap.xml`)
  .then(() => console.log(`sitemap.xml was copied to ./out`))
  .catch(() => console.error(`Error: sitemap.xml could not be moved to ./out`));
