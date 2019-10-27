import { useQuery } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import gql from "graphql-tag";
import { getOr } from "lodash/fp";
import Link from "next/link";
import React from "react";

import Card from "../components/card";
import Container from "../components/container";
import HeroSection from "../components/hero-section";
import Layout from "../components/layout";
import { withApollo } from "../components/with-apollo";
import posts from "../posts";

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
  const { loading, data } = useQuery(repositoriesQuery);
  const repositories = getOr([], `viewer.repositories.edges`, data);

  return (
    <Layout>
      <HeroSection>
        <h1 className="font-black text-2xl sm:text-3xl md:text-4xl text-white">
          Hi, I&#39;m Taylor Bryant.
        </h1>

        <p className="text-xl sm:text-2xl text-white">
          I&#39;m a software engineer from Memphis, TN. I build software
          products using React, Next.js, and GraphQL.
        </p>
      </HeroSection>

      <section className="mt-4">
        <Container>
          <h2 className="font-black mb-4 md:mb-8 text-xl sm:text-2xl uppercase">
            Open Source
          </h2>

          {loading ? (
            <img src="/images/svg/loader.svg" />
          ) : (
            repositories.map(({ node: repository }) => (
              <a
                href={repository.url}
                key={repository.name}
                rel="noopener noreferrer"
                target="_blank"
                title={repository.name}
              >
                <Card>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="font-black text-xl sm:text-2xl">
                      {`${repository.name}`}
                    </h2>

                    <div className="flex items-center justify-end">
                      <FontAwesomeIcon className="h-5 mr-2 w-5" icon={faStar} />
                      <p className="text-lg">
                        {repository.stargazers.totalCount}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg">{repository.description}</p>
                </Card>
              </a>
            ))
          )}
        </Container>
      </section>

      <section>
        <Container>
          <h2 className="font-black mb-4 md:mb-8 text-xl sm:text-2xl uppercase">
            Blog
          </h2>

          {posts.map(post => (
            <Link href={post.path} key={post.title}>
              <a title={post.title}>
                <Card>
                  <h2 className="font-black text-xl sm:text-2xl mb-2">
                    {post.title}
                  </h2>

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

export default withApollo(Home);
