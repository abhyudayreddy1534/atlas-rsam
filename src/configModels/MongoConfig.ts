export interface IMongoConfig {
  dbName: string;
  url: string;
}

export const defaultMongoConfig: IMongoConfig = {
  dbName: '',
  url: ''
};

export class MongoConfig implements IMongoConfig {
  constructor(private properties: IMongoConfig) {}

  get dbName() {
    return this.properties.dbName;
  }

  get url() {
    return this.properties.url;
  }
}

export function getMongoConfig(cfg?: IMongoConfig): IMongoConfig {
  return {
    ...defaultMongoConfig,
    ...cfg
  };
}
