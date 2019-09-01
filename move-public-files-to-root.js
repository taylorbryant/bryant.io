/* eslint-env node */
const fs = require(`fs`).promises;

Promise.all(
  [`_redirects`, `sitemap.xml`].map(fileName =>
    fs
      .copyFile(`./public/${fileName}`, `./out/${fileName}`)
      .then(() => fileName)
  )
).then(fileNames =>
  console.log(
    `The following files in './public' were copied to './out': ${JSON.stringify(
      fileNames
    )}`
  )
);
