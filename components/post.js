import { format } from "date-fns";
import Head from "next/head";

import Container from "./container";
import HeroSection from "./hero-section";
import Layout from "./layout";

function Post(props) {
  return (
    <Layout>
      <Head>
        {/* HTML Meta Tags */}
        <title key="html-meta-title">{`Taylor Bryant - ${
          props.meta.title
        }`}</title>
        <meta
          key="html-meta-description"
          name="description"
          content={props.meta.summary}
        />
        {/* Google / Search Engine Tags */}
        <meta key="google-name" itemProp="name" content={props.meta.title} />
        <meta
          key="google-description"
          itemProp="description"
          content={props.meta.summary}
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
          content={`https://bryant.io/blog${props.meta.url}`}
        />
        <meta key="facebook-type" property="og:type" content="website" />
        <meta
          key="facebook-title"
          property="og:title"
          content={props.meta.title}
        />
        <meta
          key="facebook-description"
          property="og:description"
          content={props.meta.summary}
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
        <meta
          key="twitter-title"
          name="twitter:title"
          content={props.meta.title}
        />
        <meta
          key="twitter-description"
          name="twitter:description"
          content={props.meta.summary}
        />
        <meta
          key="twitter-iamge"
          name="twitter:image"
          content="/static/images/android-chrome-256x256.png"
        />
      </Head>
      <HeroSection>
        <p className="mb-2 text-white tracking-widest uppercase">
          {format(props.meta.date, `MMMM D, YYYY`)}
        </p>
        <h2 className="font-black text-4xl text-white">{props.meta.title}</h2>
        <p className="text-2xl text-white">{props.meta.summary}</p>
      </HeroSection>
      <Container>
        <div className="markdown-body">{props.children}</div>
      </Container>
    </Layout>
  );
}

export default Post;
