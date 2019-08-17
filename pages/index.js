import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import gql from "graphql-tag";
import { getOr } from "lodash/fp";
import Link from "next/link";
import React from "react";
import { useQuery } from "urql";

import Card from "../components/card";
import Container from "../components/container";
import HeroSection from "../components/hero-section";
import Layout from "../components/layout";
import posts from "../src/posts";

const repositoriesQuery = gql`
  query getRepositories {
    viewer {
      repositories(
        orderBy: { direction: DESC, field: STARGAZERS }
        affiliations: OWNER
        first: 7
      ) {
        edges {
          node {
            url
            name
            description
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;

function Home() {
  const [repositoriessResult] = useQuery({
    query: repositoriesQuery
  });

  const repositories = getOr(
    [],
    `data.viewer.repositories.edges`,
    repositoriessResult
  );

  return (
    <Layout>
      <HeroSection>
        <h1 className="font-black text-4xl text-white">
          Hi, I&#39;m Taylor Bryant.
        </h1>
        <p className="text-2xl text-white">
          I&#39;m a software engineer from Memphis, TN. I build software
          products using React, Next.js, and GraphQL.
        </p>
      </HeroSection>

      {repositoriessResult.loading ? null : (
        <section className="mt-4">
          <Container>
            <h2 className="font-black mb-4 md:mb-8 text-2xl uppercase">
              Open Source
            </h2>

            {repositories.map(({ node: repository }) => (
              <a
                href={repository.url}
                key={repository.name}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Card>
                  <div className="flex items-center justify-between">
                    <h2 className="font-black text-2xl mb-2">
                      {repository.name}
                    </h2>
                    <div className="flex items-center justify-end">
                      <FontAwesomeIcon className="h-6 mr-2 w-6" icon={faStar} />
                      <p className="text-lg">
                        {repository.stargazers.totalCount}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg">{repository.description}</p>
                </Card>
              </a>
            ))}
          </Container>
        </section>
      )}

      <section>
        <Container>
          <h2 className="font-black mb-4 md:mb-8 text-2xl uppercase">Blog</h2>

          {posts.map(post => (
            <Link href={post.path} key={post.title}>
              <a>
                <Card>
                  <h2 className="font-black text-2xl mb-2">{post.title}</h2>
                  <p className="text-lg">{post.summary}</p>
                </Card>
              </a>
            </Link>
          ))}
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
