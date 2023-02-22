/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Yuyu, User } from "@prisma/client";

export class YuyuServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.YuyuFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.YuyuFindManyArgs>
  ): Promise<number> {
    return this.prisma.yuyu.count(args);
  }

  async findMany<T extends Prisma.YuyuFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.YuyuFindManyArgs>
  ): Promise<Yuyu[]> {
    return this.prisma.yuyu.findMany(args);
  }
  async findOne<T extends Prisma.YuyuFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.YuyuFindUniqueArgs>
  ): Promise<Yuyu | null> {
    return this.prisma.yuyu.findUnique(args);
  }
  async create<T extends Prisma.YuyuCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.YuyuCreateArgs>
  ): Promise<Yuyu> {
    return this.prisma.yuyu.create<T>(args);
  }
  async update<T extends Prisma.YuyuUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.YuyuUpdateArgs>
  ): Promise<Yuyu> {
    return this.prisma.yuyu.update<T>(args);
  }
  async delete<T extends Prisma.YuyuDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.YuyuDeleteArgs>
  ): Promise<Yuyu> {
    return this.prisma.yuyu.delete(args);
  }

  async findUsers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.yuyu
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .users(args);
  }
}
