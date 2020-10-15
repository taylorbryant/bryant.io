import "../css/index.css";

import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import React from "react";
import ReactGA from "react-ga";

const SEO_TITLE = `Taylor Bryant - Software Engineer`;
const SEO_DESCRIPTION = `Hi, my name is Taylor Bryant. I am a software engineer from Memphis, TN.`;

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
          {/* HTML Meta Tags */}
          <title key="html-meta-title">{SEO_TITLE}</title>
          <meta
            content={SEO_DESCRIPTION}
            key="html-meta-description"
            name="description"
          />
          {/* Google / Search Engine Tags */}
          <meta content={SEO_TITLE} itemProp="name" key="google-name" />
          <meta
            content={SEO_DESCRIPTION}
            itemProp="description"
            key="google-description"
          />
          <meta
            content="/android-chrome-256x256.png"
            itemProp="image"
            key="google-image"
          />
          {/* Facebook Meta Tags */}
          <meta
            content={`https://bryant.io`}
            key="facebook-url"
            property="og:url"
          />
          <meta content="website" key="facebook-type" property="og:type" />
          <meta content={SEO_TITLE} key="facebook-title" property="og:title" />
          <meta
            content={SEO_DESCRIPTION}
            key="facebook-description"
            property="og:description"
          />
          <meta
            content="/android-chrome-256x256.png"
            key="facebook-image"
            property="og:image"
          />
          {/* Twitter Meta Tags */}
          <meta
            content="summary_large_image"
            key="twitter-card"
            name="twitter:card"
          />
          <meta content={SEO_TITLE} key="twitter-title" name="twitter:title" />
          <meta
            content={SEO_DESCRIPTION}
            key="twitter-description"
            name="twitter:description"
          />
          <meta
            content="/android-chrome-256x256.png"
            key="twitter-iamge"
            name="twitter:image"
          />
          {/* Favicon */}
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

        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
