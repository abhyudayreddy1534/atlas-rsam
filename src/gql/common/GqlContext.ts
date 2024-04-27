
import { Context as KoaContext } from 'koa';

export interface ApolloContext extends Record<string, any> {
  ctx: KoaContext;
}

export class GqlContext {
  ctx: KoaContext;

  constructor(apollo: ApolloContext) {
    this.ctx = apollo.ctx;
  }

  static async create(apollo: ApolloContext): Promise<GqlContext> {
    return new GqlContext(apollo);
  }
}
