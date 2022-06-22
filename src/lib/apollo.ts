import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4opeqe90ko101xn84h275c6/master',
  cache: new InMemoryCache()
})