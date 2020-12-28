import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import buildStructuredDataSchema from "../lib/buildStructuredDataSchema";

export default function PostPageLayout({ meta, children }) {
  const router = useRouter();
  const metaUrl = `https://taylorbryant.dev${router.asPath}`;

  return (
    <>
      <Head>
        {buildStructuredDataSchema({
          "@context": `http://schema.org`,
          "@type": `BlogPosting`,
          headline: meta.title,
          description: meta.description,
          url: metaUrl,
          image: `https://taylorbryant.dev/android-chrome-256x256.png`,
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
        })}
      </Head>

      <NextSeo
        canonical={metaUrl}
        description={meta.description}
        openGraph={{
          title: meta.title,
          description: meta.description,
          type: `article`,
          url: metaUrl,
        }}
        title={`Taylor Bryant - ${meta.title}`}
      />

      <article className="flex-col max-w-3xl px-3 mx-auto md:px-6">
        <time className="block mb-3 text-sm tracking-widest uppercase">
          {new Intl.DateTimeFormat(`en-US`, {
            month: `long`,
            day: `numeric`,
            year: `numeric`,
          }).format(new Date(meta.date))}
        </time>

        <h1 className="mb-6 text-3xl font-bold leading-tight">{meta.title}</h1>

        <div className="markdown-body">{children}</div>
      </article>
    </>
  );
}
