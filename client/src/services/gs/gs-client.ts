import { HttpLink, ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

export const link = new HttpLink({
  uri: '/graphql',
});

export const client = new ApolloClient<NormalizedCacheObject>({
  cache: new InMemoryCache(),
  link,
});
