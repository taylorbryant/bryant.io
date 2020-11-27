import { format, parseISO } from "date-fns";
import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";
import { useRouter } from "next/router";

import PageLayout from "./page-layout";
import buildStructuredDataSchema from "../lib/build-structured-data-schema";

function PostPageLayout(props) {
  const router = useRouter();

  return (
    <PageLayout>
      <Head>
        {/* HTML Meta Tags */}
        <title key="html-meta-title">{`Taylor Bryant - ${props.meta.title}`}</title>
        <meta
          content={props.meta.summary}
          key="html-meta-description"
          name="description"
        />
        {/* Google / Search Engine Tags */}
        <meta content={props.meta.title} itemProp="name" key="google-name" />
        <meta
          content={props.meta.summary}
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
          content={`https://taylorbryant.dev${router.asPath}`}
          key="facebook-url"
          property="og:url"
        />
        <meta content="website" key="facebook-type" property="og:type" />
        <meta
          content={props.meta.title}
          key="facebook-title"
          property="og:title"
        />
        <meta
          content={props.meta.summary}
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
        <meta
          content={props.meta.title}
          key="twitter-title"
          name="twitter:title"
        />
        <meta
          content={props.meta.summary}
          key="twitter-description"
          name="twitter:description"
        />
        <meta
          content="/android-chrome-256x256.png"
          key="twitter-iamge"
          name="twitter:image"
        />

        {buildStructuredDataSchema({
          "@context": `http://schema.org`,
          "@type": `BlogPosting`,
          headline: props.meta.title,
          description: props.meta.description,
          url: `https://taylorbryant.dev${router.asPath}`,
          image: `https://taylorbryant.dev/android-chrome-256x256.png`,
          datePublished: props.meta.date,
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
        })}
      </Head>

      <article className="flex-col max-w-3xl px-3 mx-auto md:px-6">
        <time className="block mb-3 text-sm tracking-widest uppercase">
          {format(parseISO(props.meta.date), `MMMM d, yyyy`)}
        </time>

        <h1 className="mb-6 text-3xl font-bold leading-tight">
          {props.meta.title}
        </h1>

        <div className="markdown-body">{props.children}</div>
      </article>
    </PageLayout>
  );
}

PostPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  meta: PropTypes.object.isRequired,
};

export default PostPageLayout;
