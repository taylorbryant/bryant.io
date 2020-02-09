import {
  faGithub,
  faLinkedinIn,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

// eslint-disable-next-line import/default
import posts from "../lib/posts";

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

import PageLayout from "../components/page-layout";

function HomePage() {
  return (
    <PageLayout>
      <div>
        <div className="flex flex-col justify-center">
          <section className="py-9 md:py-16">
            <h1 className="mb-3 text-2xl font-bold md:text-4xl">
              Hi, my name is Taylor Bryant.
            </h1>

            <p className="mb-6 text-xl leading-relaxed md:mb-9">
              I am a software engineer from Memphis, TN. I build software
              products using React, Next.js, and GraphQL at a company called
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

            <ul className="flex">
              {[
                {
                  url: `https://github.com/taylorbryant`,
                  icon: faGithub,
                  title: `GitHub Profile`
                },
                {
                  url: `https://twitter.com/tayl_rbryant`,
                  icon: faTwitter,
                  title: `Twitter Profile`
                },
                {
                  url: `https://www.linkedin.com/in/taylorjamesbryant/`,
                  icon: faLinkedinIn,
                  title: `LinkedIn Profile`
                }
              ].map(item => (
                <li className="mr-9" key={item.url}>
                  <a href={item.url} rel="noopener noreferrer" target="_blank">
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

        <section className="flex flex-col py-9 md:py-16 md:justify-between md:flex-row">
          <div className="md:w-1/3">
            <h1 className="mb-6 text-3xl font-bold md:mb-0" id="projects">
              Projects
            </h1>
          </div>

          <div className="md:w-2/3">
            {` `}
            {Object.entries(PROJECTS).map(([type, projects]) => (
              <section key={type}>
                <h1 className="mb-3 text-2xl font-bold">{type}</h1>
                {projects.map(project => (
                  <article className="mb-6" key={project.name}>
                    <h1 className="mb-3 text-xl">
                      <a
                        href={project.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {project.name}
                      </a>
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </article>
                ))}
              </section>
            ))}
          </div>
        </section>

        <section className="flex flex-col md:justify-between md:flex-row pb-9 md:pb-16 ">
          <div className="md:w-1/3">
            <h1 className="mb-6 text-3xl font-bold md:mb-0" id="writing">
              Writing
            </h1>
          </div>

          <div className="md:w-2/3">
            {posts.map(post => (
              <article className="mb-6" key={post.title}>
                <h1 className="mb-3 text-xl">
                  <Link href={post.route}>
                    <a>{post.title}</a>
                  </Link>
                </h1>
                <p className="leading-relaxed">{post.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

export default HomePage;
