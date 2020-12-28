import "../css/index.css";

import App from "next/app";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { DefaultSeo } from "next-seo";
import React from "react";
import ReactGA from "react-ga";

Router.events.on(`routeChangeComplete`, (url) => ReactGA.pageview(url));

class MyApp extends App {
  componentDidMount() {
    ReactGA.initialize(`UA-111515120-4`);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link
            href="/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link href="/site.webmanifest" rel="manifest" />
          <link color="#5bbad5" href="/safari-pinned-tab.svg" rel="mask-icon" />
          <link href="/favicon.ico" rel="shortcut icon" />
          <meta content="#00aba9" name="msapplication-TileColor" />
          <meta content="/browserconfig.xml" name="msapplication-config" />
          <meta content="#ffffff" name="theme-color" />
        </Head>

        <DefaultSeo
          openGraph={{
            image: `https://taylorbryant.dev/android-chrome-256x256.png`,
          }}
          twitter={{
            handle: `@tayl_rbryant`,
            site: `@tayl_rbryant`,
            cardType: `summary_large_image`,
          }}
        />
        <div className="flex flex-col min-h-screen space-y-12 text-lg md:space-y-24">
          <header className="flex items-center w-full max-w-3xl px-3 pt-3 mx-auto md:pt-6 md:px-6">
            <Image
              alt="An illustration of Taylor with his cat"
              className="rounded-full"
              height={40}
              priority
              src="/avatar.png"
              width={40}
            />

            <Link href="/">
              <a className="ml-3 text-2xl no-underline text-black">
                Taylor Bryant
              </a>
            </Link>
          </header>

          <main className="flex-1 space-y-12 md:space-y-24">
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </main>

          <footer className="w-full max-w-3xl px-3 pb-3 mx-auto text-sm text-center md:text-left md:pb-6 md:px-6">
            Built using{` `}
            <a
              href="https://nextjs.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              Next.js
            </a>
            {` `}
            and{` `}
            <a
              href="https://tailwindcss.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Tailwind CSS
            </a>
            .
          </footer>
        </div>
      </>
    );
  }
}

export default MyApp;
