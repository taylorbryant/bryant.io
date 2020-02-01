import React from "react";
import Link from "next/link";

import PageLayout from "../components/page-layout";

function HomePage() {
  return (
    <PageLayout>
      <div className="flex flex-col justify-center">
        <div className="mb-9">
          <img
            alt="An illustration of Taylor Bryant and his cat Caspian"
            height="250"
            src="/images/me-square.png"
            width="250"
          />
        </div>

        <div>
          <h2 className="mb-3 text-3xl font-bold">
            Hi, my name is{` `}
            <span className="px-2 py-1 bg-secondary">Taylor Bryant</span>.
          </h2>

          <p className="mb-6 text-xl leading-relaxed">
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
            working on an engineering team. If you&apos;re interested, you can
            {` `}
            <Link href="/about">
              <a>read more about me</a>
            </Link>
            .
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

export default HomePage;
