import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

import PageLayout from "../components/page-layout";
import getMetadataForPosts from "../lib/get-metadata-for-posts";

const PROJECTS = [
  {
    name: `next-plugin-profiler`,
    description: `Enable the React Profiler during a production build in your Next.js project`,
    url: `https://github.com/taylorbryant/next-plugin-profiler`,
    tags: [{ name: `JavaScript` }],
  },
  {
    name: `next-starter-tailwind`,
    description: `A Next.js starter styled using Tailwind CSS`,
    url: `https://github.com/taylorbryant/next-starter-tailwind`,
    tags: [{ name: `Next.js` }, { name: `Tailwind CSS` }],
  },
  {
    name: `jekyll-starter-tailwind`,
    description: `A Jekyll starter styled using Tailwind CSS`,
    url: `https://github.com/taylorbryant/jekyll-starter-tailwind`,
    tags: [{ name: `Jekyll` }, { name: `Tailwind CSS` }],
  },
  {
    name: `gatsby-starter-tailwind`,
    description: `A Gatsby starter styled using Tailwind CSS`,
    url: `https://github.com/taylorbryant/gatsby-starter-tailwind`,
    tags: [{ name: `Gatsby.js` }, { name: `Tailwind CSS` }],
  },
  {
    name: `bookmarklets.io`,
    description: `A list of potentially useful bookmarklets`,
    url: `https://bookmarklets.io`,
    tags: [{ name: `Next.js` }, { name: `Tailwind CSS` }],
  },
  {
    name: `front-end.tools`,
    description: `A collection of tools and resources for front-end developers`,
    url: `https://front-end.tools`,
    tags: [{ name: `HTML` }, { name: `CSS` }],
  },
];

function HomePage() {
  return (
    <PageLayout>
      <div className="flex flex-col justify-center">
        <section className="max-w-3xl px-3 mx-auto md:px-6">
          <h1 className="mb-3 text-4xl font-bold">
            Hi, I&apos;m Taylor. <span aria-hidden="true">👋</span>
          </h1>

          <p className="mb-12 text-xl leading-relaxed">
            I&apos;m a software engineer from Memphis, TN. I build internal
            tools using React, Next.js, GraphQL, and AWS at a company called
            {` `}
            <a
              href="https://lnc-online.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Livestock Nutrition Center
            </a>
            . In my spare time, I{` `}
            <a
              href="https://soundcloud.com/taylorbryant"
              rel="noopener noreferrer"
              target="_blank"
            >
              write music
            </a>
            ,{` `}
            <a href="#projects">build side projects</a>
            {` `}and{` `}
            <a href="#writing">write about what I&apos;ve learned</a>
            {` `}
            working on an engineering team.
          </p>

          <ul className="flex space-x-8">
            {[
              {
                url: `https://github.com/taylorbryant`,
                icon: faGithub,
                title: `GitHub`,
              },
              {
                url: `https://twitter.com/tayl_rbryant`,
                icon: faTwitter,
                title: `Twitter`,
              },
              {
                url: `https://www.linkedin.com/in/taylorjamesbryant/`,
                icon: faLinkedinIn,
                title: `LinkedIn`,
              },
            ].map((item) => (
              <li key={item.url}>
                <a
                  className="no-underline"
                  href={item.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="w-8 h-8"
                    icon={item.icon}
                    title={item.title}
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="max-w-3xl px-3 mx-auto md:px-6">
        <h1 className="mb-6 text-3xl font-bold" id="projects">
          Projects
        </h1>

        <div className="space-y-6">
          {PROJECTS.map((project) => (
            <a
              className="block font-normal no-underline"
              href={project.url}
              key={project.name}
              rel="noopener noreferrer"
              target="_blank"
            >
              <article className="bg-white rounded-md shadow-md cursor-pointer hover:shadow-lg">
                <h1
                  className={`flex items-center font-bold justify-center h-32 text-2xl text-center text-indigo-400 bg-indigo-100`}
                >
                  {project.name}
                </h1>

                <div className="p-6">
                  <p className="mb-6 leading-relaxed">{project.description}</p>

                  <ul className="space-x-2">
                    {project.tags.map((tag) => (
                      <li
                        className={`bg-gray-200 text-xs text-gray-600 inline rounded-full px-3 py-1`}
                        key={tag.name}
                      >
                        {tag.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>

      <section className="flex flex-col max-w-3xl px-3 mx-auto md:px-6 md:justify-between md:flex-row">
        <div className="md:w-1/3">
          <h1 className="mb-6 text-3xl font-bold md:mb-0" id="writing">
            Writing
          </h1>
        </div>

        <div className="space-y-6 md:w-2/3">
          {getMetadataForPosts()
            .filter(({ meta }) => meta.isPublished)
            .map(({ link, meta }) => (
              <article key={meta.title}>
                <h1 className="mb-3 text-xl">
                  <Link href={link}>
                    <a>{meta.title}</a>
                  </Link>
                </h1>
                <p className="leading-relaxed">{meta.description}</p>
              </article>
            ))}
        </div>
      </section>
    </PageLayout>
  );
}

export default HomePage;
