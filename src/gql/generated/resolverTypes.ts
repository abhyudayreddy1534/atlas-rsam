import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Dealer = {
  batteriesCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  lastDeliveredDate?: Maybe<Scalars['String']>;
  loadCompleted?: Maybe<Scalars['Boolean']>;
  loadSkipped?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Array<Maybe<Note>>>;
  presoldBatteries?: Maybe<Scalars['Int']>;
  products?: Maybe<Array<Maybe<Product>>>;
  profileURL?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  totalBatteries?: Maybe<Scalars['Int']>;
  totalWeightInKgs?: Maybe<Scalars['Int']>;
  totalWeightInLbs?: Maybe<Scalars['Int']>;
};

export type Note = {
  id?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
};

export type Product = {
  bayNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  proposed?: Maybe<Scalars['Int']>;
  shelf?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
};

export type Query = {
  serviceCenters?: Maybe<ServiceCentersResponse>;
};


export type QueryServiceCentersArgs = {
  request: ServiceCenterRequest;
};

export type ServiceCenterRequest = {
  truckId: Scalars['String'];
};

export type ServiceCentersResponse = {
  batteries?: Maybe<Scalars['Int']>;
  dealers?: Maybe<Array<Maybe<Dealer>>>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  messages?: Maybe<Scalars['String']>;
  preSoldCount?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
  temperatureInCelcius?: Maybe<Scalars['Int']>;
  travelTime?: Maybe<Scalars['String']>;
  weightInLbs?: Maybe<Scalars['Int']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Dealer: ResolverTypeWrapper<Dealer>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Note: ResolverTypeWrapper<Note>;
  Product: ResolverTypeWrapper<Product>;
  Query: ResolverTypeWrapper<{}>;
  ServiceCenterRequest: ServiceCenterRequest;
  ServiceCentersResponse: ResolverTypeWrapper<ServiceCentersResponse>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Dealer: Dealer;
  Int: Scalars['Int'];
  Note: Note;
  Product: Product;
  Query: {};
  ServiceCenterRequest: ServiceCenterRequest;
  ServiceCentersResponse: ServiceCentersResponse;
  String: Scalars['String'];
}>;

export type DealerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dealer'] = ResolversParentTypes['Dealer']> = ResolversObject<{
  batteriesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastDeliveredDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  loadCompleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  loadSkipped?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Note']>>>, ParentType, ContextType>;
  presoldBatteries?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  profileURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  totalBatteries?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalWeightInKgs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalWeightInLbs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Note'] = ResolversParentTypes['Note']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = ResolversObject<{
  bayNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  proposed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shelf?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  serviceCenters?: Resolver<Maybe<ResolversTypes['ServiceCentersResponse']>, ParentType, ContextType, RequireFields<QueryServiceCentersArgs, 'request'>>;
}>;

export type ServiceCentersResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceCentersResponse'] = ResolversParentTypes['ServiceCentersResponse']> = ResolversObject<{
  batteries?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dealers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Dealer']>>>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  messages?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preSoldCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  temperatureInCelcius?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  travelTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weightInLbs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Dealer?: DealerResolvers<ContextType>;
  Note?: NoteResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ServiceCentersResponse?: ServiceCentersResponseResolvers<ContextType>;
}>;

