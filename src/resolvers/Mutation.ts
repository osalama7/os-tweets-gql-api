import { Resolvers, MutationUpdateSentimentArgs, MutationCreateGradientDescentJobArgs } from '../__generated__/resolvers-types';
import { DataSourceContext } from '../types/DataSourceContext';


export const Mutation: Resolvers = {
  Mutation: {
    async updateSentiment(_parent: unknown, updateTweetInput: MutationUpdateSentimentArgs, _context: DataSourceContext) {
      const res = await _context.datasources.tweetsAPI.findAndUpdate({ id: updateTweetInput.input.id, sentiment: updateTweetInput.input.sentiment });

      return { id: res.id, text: res.text, sentiment: res.sentiment };
    },
    async createGradientDescentJob(_parent: unknown, { input }: MutationCreateGradientDescentJobArgs, _context: DataSourceContext) {
      const { theta, cost, frequencies, sources, version } = input;
      const res = await _context.datasources.tweetsAPI.createNLPJob({ theta, cost, frequencies, sources, version });

      return res;
    }
  },
};