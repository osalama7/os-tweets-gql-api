import { Resolvers } from '../__generated__/resolvers-types';
import { DataSourceContext } from '../types/DataSourceContext';

export const Query: Resolvers = {
  Query: {
    tweets(_parent: unknown, { paginationOptions } , _context: DataSourceContext) {
      return _context.datasources.tweetsAPI.find(paginationOptions);
    },
  },
};
