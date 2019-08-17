import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  ssrExchange
} from "urql";

import "isomorphic-unfetch";

let urqlClient = null;
let ssrCache = null;

export default function initUrqlClient(initialState) {
  // Create a new client for every server-side rendered request to reset its state
  // for each rendered page
  // Reuse the client on the client-side however
  const isServer = typeof window === `undefined`;
  if (isServer || !urqlClient) {
    ssrCache = ssrExchange({ initialState });

    urqlClient = createClient({
      url: `https://api.github.com/graphql`,
      fetchOptions: {
        headers: {
          Authorization: `Bearer 5810d827f92e04859522921432535a3ceebdbf96`
        }
      },
      // Active suspense mode on the server-side
      suspense: isServer,
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange]
    });
  }

  // Return both the cache and the client
  return [urqlClient, ssrCache];
}
