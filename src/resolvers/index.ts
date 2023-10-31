import { Query } from './Query';
import { Mutation } from './Mutation';
import { TweetResolver } from './Tweet';
const resolvers = {
  ...Query,
  ...Mutation,
  ...TweetResolver,
};

export default resolvers;
