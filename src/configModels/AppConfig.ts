import config from 'config';
import { getMongoConfig, IMongoConfig, MongoConfig } from './MongoConfig.js';
import { getRequestDefaults, IRequestDefaults } from './RequestDefaults.js';
import { getGqlConfig, GqlConfig, IGqlConfig } from './GqlConfig.js';

export interface IAppConfig {
  mongo: IMongoConfig;
  gql: IGqlConfig;
  requestDefaults: IRequestDefaults;
}

export class AppConfig {
  private static _instance: AppConfig;

  private _cfg: IAppConfig;
  private _gql: GqlConfig;

  private _mongo: MongoConfig;

  private constructor(cfg?: IAppConfig) {
    this._cfg = {
      ...JSON.parse(JSON.stringify(config.get('gqlApp') as IAppConfig)),
      ...cfg
    };

    this._cfg.gql = getGqlConfig(this._cfg.gql);
    this._cfg.mongo = getMongoConfig(this._cfg.mongo);
    this._cfg.requestDefaults = getRequestDefaults(this._cfg.requestDefaults);
    this._mongo = new MongoConfig(this._cfg.mongo);
    this._gql = new GqlConfig(this._cfg.gql);


  }

  static get instance(): AppConfig {
    if (!AppConfig._instance) {
      AppConfig._instance = new AppConfig();
    }
    return AppConfig._instance;
  }

  get cfg(): IAppConfig {
    return { ...this._cfg };
  }


  get mongo(): MongoConfig {
    return this._mongo;
  }

  get requestDefaults(): IRequestDefaults {
    return { ...this._cfg.requestDefaults };
  }

  
  get gql(): GqlConfig {
    return this._gql;
  }

}