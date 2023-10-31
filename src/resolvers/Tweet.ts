import { Resolvers, Tweet } from '../__generated__/resolvers-types';
import { DataSourceContext } from '../types/DataSourceContext';

export const TweetResolver: Resolvers = {
  Tweet: {
    __resolveReference(parent: Tweet, _context: DataSourceContext) {
      return { id: parent.id, text: parent.text, sentiment: parent.sentiment };
    },
  },
};