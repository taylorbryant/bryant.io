import React from "react";
import ReactGA from "react-ga";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

const SEO_TITLE = `Taylor Bryant - Software Engineer`;
const SEO_DESCRIPTION = `Taylor Bryant is a software engineer living in Memphis, TN. He builds software products using React, Next.js, and GraphQL.`;

Router.events.on(`routeChangeComplete`, url => ReactGA.pageview(url));

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

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
                  <meta
                    content={SEO_TITLE}
                    itemProp="name"
                    key="google-name"
                  />
                  <meta
                    content={SEO_DESCRIPTION}
                    itemProp="description"
                    key="google-description"
                  />
                  <meta
                    content="/static/favicon/android-chrome-256x256.png"
                    itemProp="image"
                    key="google-image"
                  />
                  {/* Facebook Meta Tags */}
                  <meta
                    content={`https://bryant.io`}
                    key="facebook-url"
                    property="og:url"
                  />
                  <meta
                    content="website"
                    key="facebook-type"
                    property="og:type"
                  />
                  <meta
                    content={SEO_TITLE}
                    key="facebook-title"
                    property="og:title"
                  />
                  <meta
                    content={SEO_DESCRIPTION}
                    key="facebook-description"
                    property="og:description"
                  />
                  <meta
                    content="/static/favicon/android-chrome-256x256.png"
                    key="facebook-image"
                    property="og:image"
                  />
                  {/* Twitter Meta Tags */}
                  <meta
                    content="summary_large_image"
                    key="twitter-card"
                    name="twitter:card"
                  />
                  <meta
                    content={SEO_TITLE}
                    key="twitter-title"
                    name="twitter:title"
                  />
                  <meta
                    content={SEO_DESCRIPTION}
                    key="twitter-description"
                    name="twitter:description"
                  />
                  <meta
                    content="/static/favicon/android-chrome-256x256.png"
                    key="twitter-iamge"
                    name="twitter:image"
                  />
                  {/* Favicon */}
                  <link
                    href="/static/favicon/apple-touch-icon.png"
                    rel="apple-touch-icon"
                    sizes="180x180"
                  />
                  <link
                    href="/static/favicon/favicon-32x32.png"
                    rel="icon"
                    sizes="32x32"
                    type="image/png"
                  />
                  <link
                    href="/static/favicon/favicon-16x16.png"
                    rel="icon"
                    sizes="16x16"
                    type="image/png"
                  />
                  <link
                    href="/static/favicon/site.webmanifest"
                    rel="manifest"
                  />
                  <link
                    color="#5bbad5"
                    href="/static/favicon/safari-pinned-tab.svg"
                    rel="mask-icon"
                  />
                  <link
                    href="/static/favicon/favicon.ico"
                    rel="shortcut icon"
                  />
                  <meta content="#00aba9" name="msapplication-TileColor" />
                  <meta
                    content="/static/favicon/browserconfig.xml"
                    name="msapplication-config"
                  />
                  <meta content="#ffffff" name="theme-color" />
                </Head>
                <Component {...pageProps} />
            </>
    );
  }
}
