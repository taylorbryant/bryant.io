import {
  faGithub,
  faLinkedinIn,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

import PageLayout from "../components/page-layout";

function HomePage() {
  return (
    <PageLayout>
      <section className="flex flex-col justify-center">
        <figure className="mb-6 md:mb-9">
          <img
            alt="An illustration of Taylor Bryant and his cat Caspian"
            height="250"
            src="/images/me-square.png"
            width="250"
          />
        </figure>

        <h1 className="mb-3 text-2xl font-bold md:text-3xl">
          Hi, my name is{` `}
          <span className="px-2 py-1 bg-secondary">Taylor Bryant</span>.
        </h1>

        <p className="mb-6 text-xl leading-relaxed md:mb-9">
          I am a software engineer from Memphis, TN. I build software products
          using React, Next.js, and GraphQL at a company called
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
          <Link href="/projects">
            <a>build side projects</a>
          </Link>
          {` `}and{` `}
          <Link href="/writing">
            <a>write about what I&apos;ve learned</a>
          </Link>
          {` `}
          working on an engineering team.
        </p>

        <ul className="flex">
          {[
            { url: `https://github.com/taylorbryant`, icon: faGithub },
            { url: `https://twitter.com/tayl_rbryant`, icon: faTwitter },
            {
              url: `https://www.linkedin.com/in/taylorjamesbryant/`,
              icon: faLinkedinIn
            }
          ].map(item => (
            <li className="mr-9" key={item.url}>
              <a href={item.url} rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="w-8 h-8" icon={item.icon} />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </PageLayout>
  );
}

export default HomePage;
