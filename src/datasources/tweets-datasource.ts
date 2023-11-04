import { PrismaClient } from '@prisma/client';

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

  async find({ skip = 0, take = 10 }) {
    return this.prisma.tweets.findMany({ skip, take });
  }

  async findAndUpdate(updateSentiment: UpdateSentimentInput) {
    const { id, sentiment } = updateSentiment;
    const data = { sentiment: sentiment.toString() };
    return this.prisma.tweets.update({ where: { id }, data });
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