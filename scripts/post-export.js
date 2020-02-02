/* eslint-env node */
const fs = require(`fs-extra`);
const getPathsObject = require(`./get-paths-object`);
const { format } = require(`date-fns`);

const robots = `User-agent: *
Sitemap: https://bryant.io/sitemap.xml
Disallow:`;

fs.writeFileSync(`out/robots.txt`, robots);
console.log(`robots.txt saved!`);

const pathsObj = getPathsObject();
const today = format(new Date(), `yyyy-MM-dd`);
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
  ${Object.keys(pathsObj).map(
    path => `<url>
    <loc>https://bryant.io${path}</loc>
    <lastmod>${
      pathsObj[path].lastModified
        ? format(new Date(pathsObj[path].lastModified), `yyyy-MM-dd`)
        : today
    }</lastmod>
  </url>`
  )}
</urlset>`;

fs.writeFileSync(`out/sitemap.xml`, sitemapXml);
console.log(`sitemap_local.xml saved!`);
