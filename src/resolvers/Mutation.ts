import { Resolvers, MutationUpdateSentimentArgs, MutationCreateGradientDescentJobArgs, MutationGetSentimentPredictionArgs, NlpSentimentResult } from '../__generated__/resolvers-types';
import { DataSourceContext } from '../types/DataSourceContext';

interface Sentiment {
  id: string;
  sentiment: number;
}

export const Mutation: Resolvers = {
  Mutation: {
    async updateSentiment(_parent: unknown, updateTweetInput: MutationUpdateSentimentArgs, _context: DataSourceContext) {
      const res = await _context.datasources.tweetsAPI.findAndUpdate(updateTweetInput.input);

      return res;
    },
    async createGradientDescentJob(_parent: unknown, { input }: MutationCreateGradientDescentJobArgs, _context: DataSourceContext) {
      const { theta, cost, frequencies, sources, version } = input;
      const res = await _context.datasources.tweetsAPI.createNLPJob({ theta, cost, frequencies, sources, version });

      return res;
    },
    async getSentimentPrediction(_parent: unknown, { input }: MutationGetSentimentPredictionArgs, _context: DataSourceContext) {
      const { data } = await _context.datasources.nlpAPI.getSentimentPrediction(input.tweets);
      const tweetsWithSentiment = await _context.datasources.tweetsAPI.findManyByIds(data.updateSentiment.map((tweet: Sentiment) => tweet.id));
      return tweetsWithSentiment.map((tweet) => { return { id: tweet.id, sentiment: tweet.sentiment } });
    }
  },
};