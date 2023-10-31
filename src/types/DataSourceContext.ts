import { TweetsDataSource } from '../datasources/tweets-datasource';
import { PrismaClient } from '@prisma/client'

export interface DataSourceContext {
  auth?: string
  prisma: PrismaClient
  datasources: {
    tweetsAPI: TweetsDataSource
  }
}

const prisma = new PrismaClient({ log: ['query', 'info'] });
export const createContext = async () => ({
  prisma,
  auth: '',
  datasources: {
    tweetsAPI:  new TweetsDataSource(prisma),
  }
});
