import { PrismaClient } from '@prisma/client';
import { PaginatedResource, PaginatedResourceQueryOptions } from '../types/Pagination';
import { Tweet } from '../__generated__/resolvers-types';

type UpdateSentimentInput = {
  id: string;
  sentiment: number;
};

interface CreateGraduetDescentJob {
  theta: number[];
  cost: number;
  frequencies: any;
  sources: string[];
  version: string;
}

export class TweetsDataSource {
  private prisma;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }
  
  async findPaginated(paginatioOptionsnQuery: PaginatedResourceQueryOptions): Promise<PaginatedResource<Tweet>> { 
    const { skip, take } = paginatioOptionsnQuery;
    const totalCount = await this.prisma.tweets.count();
    if (totalCount === 0) {
      return Promise.resolve({ totalCount, hasMore: false, cursor: 0, nodes: [], pageInfo: { start: '', end: '', count: 0 } });
    }
    const nodes = await this.prisma.tweets.findMany({ skip, take });
    const start = nodes[0].id;
    const end = nodes[nodes.length - 1].id;
    
    return {
      totalCount,
      nodes,
      hasMore: nodes.length < take ? false : true,
      cursor: totalCount - ( skip + take ),
      pageInfo: {
        start,
        end,
        count: nodes.length,
      }
    }
  }


  async findManyByIds(ids: string[]) {
    return this.prisma.tweets.findMany({ where: { id: { in: ids } }, select: { id: true, sentiment: true } });
  }

  async find({ skip = 0, take = 10 }) {
    return this.prisma.tweets.findMany({ skip, take });
  }

  async findAndUpdate(updateSentiment: UpdateSentimentInput[]) {
    const promises = updateSentiment.map(prediction => {
      return this.prisma.tweets.update({ where: { id: prediction.id }, data: { sentiment: prediction.sentiment.toString() } });
    })

    return Promise.all(promises);
  }

  async createNLPJob(createGDJob: CreateGraduetDescentJob) {
    const { version } = createGDJob;
    return this.prisma.gradientDescentJob.upsert({
      where: {
        version
      },
      create: {
        ...createGDJob
      },
      update: {
        ...createGDJob
      },
    })
  }

  async findNLPJob(version: string) {
    return this.prisma.gradientDescentJob.findUnique({ where: { version } });
  }
}
