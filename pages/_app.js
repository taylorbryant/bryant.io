import React from "react";
import App from "next/app";
import Head from "next/head";

const SEO_TITLE = `Taylor Bryant - Software Engineer`;
const SEO_DESCRIPTION = `Taylor Bryant is a software engineer living in Memphis, TN. He builds software products using React, Next.js, and GraphQL.`;

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          {/* HTML Meta Tags */}
          <title key="html-meta-title">{SEO_TITLE}</title>
          <meta
            key="html-meta-description"
            name="description"
            content={SEO_DESCRIPTION}
          />
          {/* Google / Search Engine Tags */}
          <meta key="google-name" itemProp="name" content={SEO_TITLE} />
          <meta
            key="google-description"
            itemProp="description"
            content={SEO_DESCRIPTION}
          />
          <meta
            key="google-image"
            itemProp="image"
            content="/static/images/android-chrome-256x256.png"
          />
          {/* Facebook Meta Tags */}
          <meta
            key="facebook-url"
            property="og:url"
            content={`https://bryant.io`}
          />
          <meta key="facebook-type" property="og:type" content="website" />
          <meta key="facebook-title" property="og:title" content={SEO_TITLE} />
          <meta
            key="facebook-description"
            property="og:description"
            content={SEO_DESCRIPTION}
          />
          <meta
            key="facebook-image"
            property="og:image"
            content="/static/images/android-chrome-256x256.png"
          />
          {/* Twitter Meta Tags */}
          <meta
            key="twitter-card"
            name="twitter:card"
            content="summary_large_image"
          />
          <meta key="twitter-title" name="twitter:title" content={SEO_TITLE} />
          <meta
            key="twitter-description"
            name="twitter:description"
            content={SEO_DESCRIPTION}
          />
          <meta
            key="twitter-iamge"
            name="twitter:image"
            content="/static/images/android-chrome-256x256.png"
          />
          {/* Favicon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/images/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/images/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/images/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/static/images/favicon.ico" />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta
            name="msapplication-config"
            content="/static/images/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
