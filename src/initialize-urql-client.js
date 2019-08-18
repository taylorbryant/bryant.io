import "isomorphic-unfetch";
import getConfig from "next/config";
import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange
} from "urql";

const { publicRuntimeConfig } = getConfig();

let ssrCache = null;
let urqlClient = null;

export default function initUrqlClient(initialState) {
  const isServer = typeof window === `undefined`;

  if (isServer || !urqlClient) {
    ssrCache = ssrExchange({ initialState });

    urqlClient = createClient({
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${publicRuntimeConfig.GITHUB_API_TOKEN}`
        }
      },
      suspense: isServer,
      url: `https://api.github.com/graphql`
    });
  }

  return [urqlClient, ssrCache];
}
