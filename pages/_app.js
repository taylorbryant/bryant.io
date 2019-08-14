import React from "react";
import App from "next/app";
import Head from "next/head";

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

          <meta name="author" content="Taylor Bryant" />
          <meta name="twitter:site" content="tayl_rbryant" />
          <meta name="twitter:creator" content="tayl_rbryant" />
          <meta
            name="twitter:image"
            content="/static/images/favicon-32x32.png"
          />
          <meta itemProp="image" content="/static/images/favicon-32x32.png" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
