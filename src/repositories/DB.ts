import { Collection, Db, MongoClient } from 'mongodb';
import { AppConfig } from '../configModels/AppConfig.js';import { cargo } from 'src/models/cargo.js';
;

export const $cargo = 'cargo';

export class DB {
  private static _instance: DB;

  private constructor(private _mongoClient: MongoClient, private _db: Db) {}

  public static async prepare(): Promise<void> {
    if (DB._instance) {
      return;
    }
    const mongoClient = await MongoClient.connect(AppConfig.instance.mongo.url);
    const db = mongoClient.db(AppConfig.instance.mongo.dbName);
    DB._instance = new DB(mongoClient, db);
  }

  static get instance(): DB {
    return DB._instance;
  }

  static collection(name: string): Collection {
    return DB._instance._db.collection(name);
  }

  get mongoClient(): MongoClient {
    return this._mongoClient;
  }

  get db(): Db {
    return this._db;
  }

  static get cargo(): Collection<cargo> {
    return DB.collection($cargo) as unknown as Collection<cargo>;
  }

}
