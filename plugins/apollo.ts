import { DefaultApolloClient } from "@vue/apollo-composable";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

export default defineNuxtPlugin((app) => {
  const httpLink = createHttpLink({
    uri: "https://rickandmortyapi.com/graphql",
  });

  const cache = new InMemoryCache();

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
  });

  app.vueApp.provide(DefaultApolloClient, apolloClient);
});
