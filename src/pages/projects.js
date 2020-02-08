import React from "react";

import IndexPageLayout from "../components/index-page-layout";

function ProjectsPage() {
  return (
    <IndexPageLayout title="Projects">
      <section>
        <h1 className="mb-3 text-2xl font-bold">Live</h1>
        {[
          {
            name: `next-starter-tailwind`,
            description: `A Next.js starter styled using Tailwind CSS`,
            url: `https://github.com/taylorbryant/next-starter-tailwind`
          },
          {
            name: `next-plugin-profiler`,
            description: `Next.js + React Profiler`,
            url: `https://github.com/taylorbryant/next-plugin-profiler`
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
          },
          {
            name: `Bookmarklets`,
            description: `A list of potentially useful bookmarklets`,
            url: `https://bookmarklets.io`
          }
        ].map(project => (
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

      <section className="mt-9">
        <h1 className="mb-3 text-2xl font-bold">In progress</h1>
        {[
          {
            name: `Haunter`,
            description: `A GitHub-flavored markdown notetaking app`
          },
          {
            name: `Dit`,
            description: `An ad-free, simple social media app for creatives to share what they're working on`
          },
          {
            name: `react.blog`,
            description: `An aggregated list of React-related blog posts`
          }
        ].map(project => (
          <article className="mb-6" key={project.name}>
            <h1 className="mb-3 text-xl font-bold">{project.name}</h1>
            <p className="leading-relaxed">{project.description}</p>
          </article>
        ))}
      </section>
    </IndexPageLayout>
  );
}

export default ProjectsPage;
