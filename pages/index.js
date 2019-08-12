import Link from "next/link";

import Container from "../components/container";
import HeroSection from "../components/hero-section";
import Layout from "../components/layout";
import posts from "../data/posts";

function Home() {
  return (
    <Layout>
      <HeroSection>
        <h2 className="font-black mb-2 text-4xl text-white">
          Hi, I'm Taylor Bryant.
        </h2>
        <p className="text-2xl text-white">
          I build software products using React, Next.js, and GraphQL.
        </p>
      </HeroSection>

      <section>
        <Container>
          <h2 className="font-black mb-8 text-2xl uppercase">Open Source</h2>

          {[
            {
              title: `Gatsby Starter Tailwind`,
              description: `A Gatsby starter styled using Tailwind CSS`
            },
            {
              title: `Tailwind Next`,
              description: `A Next.js starter styled using Tailwind CSS`
            },
            {
              title: `Tailwind Jekyll`,
              description: `A starter kit for using Tailwind CSS with Jekyll`
            }
          ].map(repository => (
            <article
              className="bg-yellow-400 p-8 border-black mb-4"
              key={repository.title}
            >
              <h2 className="font-black text-2xl mb-2">{repository.title}</h2>
              <p className="text-lg">{repository.description}</p>
            </article>
          ))}
        </Container>
      </section>

      <section>
        <Container>
          <h2 className="font-black mb-8 text-2xl uppercase">Blog</h2>

          {posts.map(post => (
            <Link href={post.path} key={post.title}>
              <a>
                <article className="bg-yellow-400 p-8 border-black mb-4">
                  <h2 className="font-black text-2xl mb-2">{post.title}</h2>
                  <p className="text-lg">{post.summary}</p>
                </article>
              </a>
            </Link>
          ))}
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
