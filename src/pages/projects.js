import React from "react";

import IndexPageLayout from "../components/index-page-layout";

const PROJECTS = {
  Packages: [
    {
      name: `next-plugin-profiler`,
      description: `Enable the React Profiler during a production build in your Next.js project`,
      url: `https://github.com/taylorbryant/next-plugin-profiler`
    },
    {
      name: `next-plugin-netlify-redirects`,
      description: `Create a Netlify _redirects file that's compatible with dynamic routes during a production build in your Next.js project`,
      url: `https://github.com/taylorbryant/next-plugin-netlify-redirects`
    }
  ],
  Starters: [
    {
      name: `next-starter-tailwind`,
      description: `A Next.js starter styled using Tailwind CSS`,
      url: `https://github.com/taylorbryant/next-starter-tailwind`
    },
    {
      name: `jekyll-starter-tailwind`,
      description: `A Jekyll starter styled using Tailwind CSS`,
      url: `https://github.com/taylorbryant/jekyll-starter-tailwind`
    },
    {
      name: `gatsby-starter-tailwind`,
      description: `A Gatsby starter styled using Tailwind CSS`,
      url: `https://github.com/taylorbryant/gatsby-starter-tailwind`
    }
  ],
  Miscellaneous: [
    {
      name: `bookmarklets.io`,
      description: `A list of potentially useful bookmarklets`,
      url: `https://bookmarklets.io`
    },
    {
      name: `front-end.tools`,
      description: `A collection of tools and resources for front-end developers`,
      url: `https://front-end.tools`
    }
  ]
};

function ProjectsPage() {
  return (
    <IndexPageLayout title="Projects">
      {Object.entries(PROJECTS).map(([type, projects]) => (
        <section key={type}>
          <h1 className="mb-3 text-2xl font-bold">{type}</h1>
          {projects.map(project => (
            <article className="mb-6" key={project.name}>
              <h1 className="mb-3 text-xl">
                <a href={project.url} rel="noopener noreferrer" target="_blank">
                  {project.name}
                </a>
              </h1>
              <p className="leading-relaxed">{project.description}</p>
            </article>
          ))}
        </section>
      ))}
    </IndexPageLayout>
  );
}

export default ProjectsPage;
