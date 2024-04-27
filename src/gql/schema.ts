import pkg from 'lodash';
const { merge } = pkg;
import { buildSubgraphSchema } from '@apollo/subgraph';
import { serviceResolvers } from './servicecenters/resolvers.js';
import { serviceTypeDefs } from './servicecenters/typeDefs.js';

export const schema = buildSubgraphSchema({
  typeDefs: [ serviceTypeDefs,],
  resolvers: merge( serviceResolvers,)
});
