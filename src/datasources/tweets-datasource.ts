import { PrismaClient } from '@prisma/client';

export class TweetsDataSource {
  private prisma;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async find({ skip = 0, take = 10 }) {
    return this.prisma.tweets.findMany({ skip, take });
  }
}