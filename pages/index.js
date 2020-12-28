import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";
import React from "react";

import buildStructuredDataSchema from "../lib/buildStructuredDataSchema";
import getMetadataForPosts from "../lib/getMetadataForPosts";

const META_DESCRIPTION = `A software engineer from Memphis, TN, specializing in React, Next.js, Tailwind CSS, and GraphQL`;
const META_TITLE = `Taylor Bryant`;

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

export default function HomePage() {
  return (
    <>
      <Head>
        {buildStructuredDataSchema({
          "@context": `http://schema.org`,
          "@type": `Person`,
          name: `Taylor Bryant`,
          url: `https://taylorbryant.dev`,
          jobTitle: `Software Engineer`,
          gender: `male`,
          sameAs: [
            `https://twitter.com/tayl_rbryant`,
            `https://www.linkedin.com/in/taylorjamesbryant/`,
          ],
        })}

        {buildStructuredDataSchema({
          "@context": `http://schema.org`,
          "@type": `Blog`,
          author: {
            "@type": `Person`,
            name: `Taylor Bryant`,
            url: `https://taylorbryant.dev`,
          },
          blogPost: getMetadataForPosts()
            .filter(({ meta }) => meta.isPublished)
            .map(({ meta, link }) => ({
              "@type": `BlogPosting`,
              headline: meta.title,
              description: meta.description,
              image: `https://taylorbryant.dev/android-chrome-256x256.png`,
              url: `https://taylorbryant.dev${link}`,
              datePublished: meta.date,
              author: {
                "@type": `Person`,
                name: `Taylor Bryant`,
                url: `https://taylorbryant.dev`,
              },
              publisher: {
                "@type": `Person`,
                name: `Taylor Bryant`,
                url: `https://taylorbryant.dev`,
              },
            })),
        })}
      </Head>

      <NextSeo
        canonical="https://taylorbryant.dev"
        description={META_DESCRIPTION}
        openGraph={{
          title: META_TITLE,
          description: META_DESCRIPTION,
          type: `website`,
          url: `https://taylorbryant.dev`,
        }}
        title={META_TITLE}
      />

      <div className="flex flex-col justify-center">
        <section className="max-w-3xl px-3 mx-auto md:px-6">
          <h1 className="mb-3 text-4xl font-bold">
            Hi, I&apos;m Taylor. <span aria-hidden="true">👋</span>
          </h1>

          <p className="mb-12 text-xl leading-relaxed">
            I build software to help people with OCD at a startup called
            {` `}
            <a
              href="https://treatmyocd.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              NOCD
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
                url: `https://www.linkedin.com/in/taylorjamesbryant`,
                icon: faLinkedinIn,
                title: `LinkedIn`,
              },
              {
                url: `https://instagram.com/tayl_rbryant`,
                icon: faInstagram,
                title: `Instagram`,
              },
            ].map((item) => (
              <li key={item.url}>
                <a
                  className="text-3xl no-underline block text-black"
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

      <section className="flex flex-col max-w-3xl px-3 mx-auto md:px-6 md:justify-between md:flex-row">
        <div className="md:w-1/3">
          <h2 className="mb-6 text-3xl font-bold md:mb-0" id="projects">
            Projects
          </h2>
        </div>

        <div className="space-y-6 md:w-2/3">
          {PROJECTS.map(({ name, url, description }) => (
            <article key={name}>
              <h3 className="mb-3 text-xl">
                <a href={url} rel="noreferrer" target="_blank">
                  {name}
                </a>
              </h3>
              <p className="leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col max-w-3xl px-3 mx-auto md:px-6 md:justify-between md:flex-row">
        <div className="md:w-1/3">
          <h2 className="mb-6 text-3xl font-bold md:mb-0" id="writing">
            Writing
          </h2>
        </div>

        <div className="space-y-6 md:w-2/3">
          {getMetadataForPosts()
            .filter(({ meta }) => meta.isPublished)
            .map(({ link, meta }) => (
              <article key={meta.title}>
                <h3 className="mb-3 text-xl">
                  <Link href={link}>
                    <a>{meta.title}</a>
                  </Link>
                </h3>
                <p className="leading-relaxed">{meta.description}</p>
              </article>
            ))}
        </div>
      </section>
    </>
  );
}
