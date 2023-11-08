import { RESTDataSource } from '@apollo/datasource-rest';
import { SentimentPredictionResult } from '../types/NlpApi';
import { Tweet } from '../__generated__/resolvers-types';

type SentimentPredictionDetail = {
  updateSentiment: Tweet[];
}

export default class NlpApi extends RESTDataSource {
  override baseURL = process.env.NLP_API_PATH;

  async getSentimentPrediction(tweets: Tweet[]) {
    const res = await this.post('/api/nlp/predict?lang=ar', {
      body: {
        tweets,
        }
      }
    );
    return res;
  }
}