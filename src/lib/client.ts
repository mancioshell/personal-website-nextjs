import {
  ApolloClient,
  DefaultOptions,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  const URI = `${process.env.CMS_HOSTNAME}:${process.env.CMS_PORT}/graphql`;
  const token = process.env.CMS_API_TOKEN

  const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  };

  return new ApolloClient({
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
    link: new HttpLink({
      uri: URI,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  });
});
