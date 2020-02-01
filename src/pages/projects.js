import React from "react";

import IndexPageLayout from "../components/index-page-layout";

function ProjectsPage() {
  return (
    <IndexPageLayout title="Projects">
      <h2 className="mb-3 text-2xl font-bold">Live</h2>
      {[
        {
          name: `Next Starter Tailwind`,
          description: `A Next.js starter styled using Tailwind CSS`,
          url: `https://github.com/taylorbryant/next-starter-tailwind`
        },
        {
          name: `Jekyll Starter Tailwind`,
          description: `A Jekyll starter styled using Tailwind CSS`,
          url: `https://github.com/taylorbryant/jekyll-starter-tailwind`
        },
        {
          name: `Gatsby Starter Tailwind`,
          description: `A Gatsby starter styled using Tailwind CSS`,
          url: `https://github.com/taylorbryant/gatsby-starter-tailwind`
        },
        {
          name: `Bookmarklets`,
          description: `A list of potentially useful bookmarklets`,
          url: `https://bookmarklets.io`
        }
      ].map(project => (
        <div className="mb-6" key={project.name}>
          <h3 className="mb-3 text-xl">
            <a href={project.url} rel="noopener noreferrer" target="_blank">
              {project.name}
            </a>
          </h3>
          <p className="leading-relaxed">{project.description}</p>
        </div>
      ))}

      <h2 className="mb-3 text-2xl font-bold mt-9">In progress</h2>
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
        <div className="mb-6" key={project.name}>
          <h3 className="mb-3 text-xl font-bold">{project.name}</h3>
          <p className="leading-relaxed">{project.description}</p>
        </div>
      ))}
    </IndexPageLayout>
  );
}

export default ProjectsPage;
