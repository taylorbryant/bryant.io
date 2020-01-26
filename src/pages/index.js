import { useQuery } from "@apollo/react-hooks";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gql from "graphql-tag";
import { getOr } from "lodash/fp";
import Link from "next/link";
import React from "react";

import Card from "../components/card";
import Container from "../components/container";
import HeroSection from "../components/hero-section";
import Layout from "../components/layout";
import { withApollo } from "../lib/apollo";
// eslint-disable-next-line import/default
import posts from "../lib/posts";

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
  console.log(posts);
  const { loading, data } = useQuery(repositoriesQuery);
  const repositories = getOr([], `viewer.repositories.edges`, data);

  return (
    <Layout>
      <HeroSection>
        <h1 className="text-2xl font-black tracking-tight text-white md:leading-normal sm:text-3xl md:text-4xl">
          Hi, I&#39;m Taylor Bryant.
        </h1>

        <p className="text-xl text-white sm:text-2xl">
          I&#39;m a software engineer at Livestock Nutrition Center. I build
          software products using React, Next.js, and GraphQL.
        </p>
      </HeroSection>

      <section className="mt-4">
        <Container>
          <h2 className="py-2 text-xl font-black tracking-tight text-center uppercase bg-yellow-400 sm:text-2xl">
            Open Source
          </h2>

          {loading ? (
            <img alt="Loading..." src="/images/svg/loader.svg" />
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
                    <h2 className="text-xl font-black leading-tight sm:text-2xl">
                      {`${repository.name}`}
                    </h2>

                    <div className="flex items-center justify-end">
                      <FontAwesomeIcon className="w-5 h-5 mr-2" icon={faStar} />
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
          <h2 className="py-2 text-xl font-black tracking-tight text-center uppercase bg-yellow-400 sm:text-2xl">
            Blog
          </h2>

          {posts.map(post => (
            <Link href={post.path} key={post.title}>
              <a title={post.title}>
                <Card>
                  <h2 className="mb-2 text-xl font-black tracking-tight sm:text-2xl">
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
