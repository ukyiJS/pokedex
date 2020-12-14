const { InMemoryCache } = require('apollo-cache-inmemory');
const { default: ApolloClient } = require('apollo-client');
const { createHttpLink } = require('apollo-link-http');

const httpLink = createHttpLink({ uri: 'https://gzhm34nn6g.execute-api.ap-northeast-2.amazonaws.com/api/graphql' });
const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({ link: httpLink, cache });
