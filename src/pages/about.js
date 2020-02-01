import Link from "next/link";
import React from "react";

import PageLayout from "../components/page-layout";

function AboutPage() {
  return (
    <PageLayout>
      <div className="flex flex-col justify-center">
        <div className="mb-6 md:mb-9">
          <img
            alt="An illustration of Taylor Bryant and his cat Caspian"
            height="250"
            src="/images/me-square.png"
            width="250"
          />
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">
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
            working on an engineering team.
          </p>

          <h3 className="mb-3 text-2xl font-bold">Software development</h3>

          <p className="mb-6 text-xl leading-relaxed">
            I first became interested in building on the web in elementary
            school. I made fan sites for a popular animated show called Dragon
            Ball Z. From elementary school to high school, I learned how to use
            WordPress, PHP, HTML, and CSS.
          </p>

          <p className="mb-6 text-xl leading-relaxed">
            When I graduated high school, I decided to enter the Computer
            Science program at the University of Memphis. There, I learned about
            object-oriented design, data structures, and algorithms. While in
            school, I started working as a contract WordPress developer.
          </p>

          <p className="mb-6 text-xl leading-relaxed">
            After leaving college, I worked in IT support fulltime while
            continuing to make WordPress sites as a contractor on nights and
            weekends. I quickly realized I didn&apos;t want to work in IT for
            the rest of my life.
          </p>

          <p className="mb-6 text-xl leading-relaxed">
            In 2017, I moved into software development fulltime and started as a
            front-end developer at a local marketing agency called{` `}
            <a
              href="https://highervisibility.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              HigherVisibility
            </a>
            . While working there, I helped build a number of custom websites
            for clients, the UI for a web app used internally at the company,
            and a proprietary template framework we used to cut down on
            development time. One of the custom websites I built{` `}
            <a href="https://www.webaward.org/winner/34192/highervisibility-wins-2018-webaward-for-magnolia-homes-website-redesign.html#.Xc7uxcBMHDt">
              won a WebAward
            </a>
            .
          </p>

          <p className="mb-6 text-xl leading-relaxed">
            At HigherVisiblity, I learned so much. I got proficient at CSS. I
            learned how to communicate with my teammates and how to translate
            design files to code.
          </p>

          <p className="mb-6 text-xl leading-relaxed">
            While working there, I felt an itch to learn newer technologies
            outside of WordPress and PHP. I spent nights and weekends learning
            JavaScript and I fell in love with React and the rest of the
            ecosystem.
          </p>

          <p className="mb-6 text-xl leading-relaxed">
            In 2018, I started working at Livestock Nutriton Center. During my
            time at the company, I&apos;ve had the opportunity to build several
            projects from the ground up and hone my skills as both a developer
            and a teammate.
          </p>

          <h3 className="mb-3 text-2xl font-bold">Music</h3>

          <p className="mb-6 text-xl leading-relaxed">
            I ran an independent record label called Carucage Records from 2011
            to 2015. In that time, we put out{` `}
            <a
              href="https://www.discogs.com/label/390082-Carucage-Records"
              rel="noopener noreferrer"
              target="_blank"
            >
              21 different releases
            </a>
            .
          </p>

          <p className="text-xl leading-relaxed">
            Over the years, I have played in a few different bands. I played
            guitar in{` `}
            <a
              href="https://neevtn.bandcamp.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Neev
            </a>
            {` `}
            and{` `}
            <a
              href="https://siddharthatn.bandcamp.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Siddhartha
            </a>
            . I played drums in{` `}
            <a
              href="https://closetome.bandcamp.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Close to Me
            </a>
            {` `}
            and{` `}
            <a
              href="https://stepsistertn.bandcamp.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Stepsister
            </a>
            . Right now, I make down-tempo electronic music in a project called
            {` `}
            <a
              href="https://batteryacidsea.bandcamp.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Battery Acid Sea
            </a>
            {` `}
            and write and record indie rock with a buddy of mine under the name
            {` `}
            <a
              href="https://soundcloud.com/taylorbryant/sets/tess-2015"
              rel="noopener noreferrer"
              target="_blank"
            >
              Tess
            </a>
            .
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

export default AboutPage;
