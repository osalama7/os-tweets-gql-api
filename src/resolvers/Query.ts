import { Resolvers, QueryGradientDescentJobArgs, QueryTweetsArgs, TweetsFeed } from '../__generated__/resolvers-types';
import { DataSourceContext } from '../types/DataSourceContext';

export const Query: Resolvers = {
  Query: {
    tweets(_parent: unknown, { input }: QueryTweetsArgs, _context: DataSourceContext): Promise<TweetsFeed> {
      const { skip, take } = input;
      return _context.datasources.tweetsAPI.findPaginated({ skip, take});
    },
    gradientDescentJob(_parent: unknown, { input }: QueryGradientDescentJobArgs, _context: DataSourceContext) {
      return _context.datasources.tweetsAPI.findNLPJob(input.version);
    },
  },
};
