import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { DataSourceContext } from '../types/DataSourceContext';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type GradientDescentJob = {
  __typename?: 'GradientDescentJob';
  cost?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  frequencies?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  sources?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  theta?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createGradientDescentJob?: Maybe<GradientDescentJob>;
  updateSentiment?: Maybe<UpdateSentimetResult>;
};


export type MutationCreateGradientDescentJobArgs = {
  input: CreateGradientDescentJobInput;
};


export type MutationUpdateSentimentArgs = {
  input: UpdateSentimentInput;
};

export type Query = {
  __typename?: 'Query';
  gradientDescentJob?: Maybe<GradientDescentJob>;
  tweets: Array<Maybe<Tweet>>;
};


export type QueryGradientDescentJobArgs = {
  input?: InputMaybe<GetGradientDescentJob>;
};


export type QueryTweetsArgs = {
  paginationOptions?: InputMaybe<Paginate>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type Tweet = {
  __typename?: 'Tweet';
  conts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  current_user_retweet_id?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  id_str?: Maybe<Scalars['Float']['output']>;
  in_reply_to_status_id?: Maybe<Scalars['Float']['output']>;
  in_reply_to_user_id?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  retweet_count?: Maybe<Scalars['Float']['output']>;
  sentiment?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  url_entities?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type CreateGradientDescentJobInput = {
  cost: Scalars['Float']['input'];
  frequencies: Scalars['JSON']['input'];
  sources: Array<InputMaybe<Scalars['String']['input']>>;
  theta: Array<InputMaybe<Scalars['Float']['input']>>;
  version: Scalars['String']['input'];
};

export type GetGradientDescentJob = {
  version: Scalars['String']['input'];
};

export type Paginate = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateSentimentInput = {
  id: Scalars['ID']['input'];
  sentiment: Scalars['Float']['input'];
};

export type UpdateSentimetResult = {
  __typename?: 'updateSentimetResult';
  id: Scalars['ID']['output'];
  sentiment: Scalars['String']['output'];
  text: Scalars['String']['output'];
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GradientDescentJob: ResolverTypeWrapper<GradientDescentJob>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Role: Role;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Tweet: ResolverTypeWrapper<Tweet>;
  createGradientDescentJobInput: CreateGradientDescentJobInput;
  getGradientDescentJob: GetGradientDescentJob;
  paginate: Paginate;
  updateSentimentInput: UpdateSentimentInput;
  updateSentimetResult: ResolverTypeWrapper<UpdateSentimetResult>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  Date: Scalars['Date']['output'];
  Float: Scalars['Float']['output'];
  GradientDescentJob: GradientDescentJob;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  Tweet: Tweet;
  createGradientDescentJobInput: CreateGradientDescentJobInput;
  getGradientDescentJob: GetGradientDescentJob;
  paginate: Paginate;
  updateSentimentInput: UpdateSentimentInput;
  updateSentimetResult: UpdateSentimetResult;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type GradientDescentJobResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['GradientDescentJob'] = ResolversParentTypes['GradientDescentJob']> = ResolversObject<{
  cost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  frequencies?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sources?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  theta?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createGradientDescentJob?: Resolver<Maybe<ResolversTypes['GradientDescentJob']>, ParentType, ContextType, RequireFields<MutationCreateGradientDescentJobArgs, 'input'>>;
  updateSentiment?: Resolver<Maybe<ResolversTypes['updateSentimetResult']>, ParentType, ContextType, RequireFields<MutationUpdateSentimentArgs, 'input'>>;
}>;

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  gradientDescentJob?: Resolver<Maybe<ResolversTypes['GradientDescentJob']>, ParentType, ContextType, Partial<QueryGradientDescentJobArgs>>;
  tweets?: Resolver<Array<Maybe<ResolversTypes['Tweet']>>, ParentType, ContextType, Partial<QueryTweetsArgs>>;
}>;

export type TweetResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Tweet'] = ResolversParentTypes['Tweet']> = ResolversObject<{
  conts?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  current_user_retweet_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id_str?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  in_reply_to_status_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  in_reply_to_user_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  retweet_count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sentiment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_entities?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateSentimetResultResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['updateSentimetResult'] = ResolversParentTypes['updateSentimetResult']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sentiment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = DataSourceContext> = ResolversObject<{
  Date?: GraphQLScalarType;
  GradientDescentJob?: GradientDescentJobResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Tweet?: TweetResolvers<ContextType>;
  updateSentimetResult?: UpdateSentimetResultResolvers<ContextType>;
}>;

