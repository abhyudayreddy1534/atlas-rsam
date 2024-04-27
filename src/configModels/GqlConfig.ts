import { ApolloServerPluginCacheControlOptions } from 'apollo-server-core';

export interface IGqlConfig {
  port: number;
  cache: ApolloServerPluginCacheControlOptions;
}

const defaultGqlConfig: IGqlConfig = {
  port: 1234,
  cache: {
    defaultMaxAge: 0,
    calculateHttpHeaders: false
  }
};

export class GqlConfig implements IGqlConfig {
  private _cfg: IGqlConfig;

  constructor(cfg?: IGqlConfig) {
    this._cfg = {
      ...defaultGqlConfig,
      ...cfg
    };
  }

  get port(): number {
    return this._cfg.port;
  }

  get cache(): ApolloServerPluginCacheControlOptions {
    return this._cfg.cache;
  }
}

export function getGqlConfig(cfg?: IGqlConfig): IGqlConfig {
  return {
    ...defaultGqlConfig,
    ...cfg
  };
}
