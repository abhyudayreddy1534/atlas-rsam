import { ApolloServer } from 'apollo-server-koa';
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageGraphQLPlayground, Config } from 'apollo-server-core';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import http from 'http';
import log4js from 'log4js';
import { schema } from './gql/schema.js';
import { ApolloContext, GqlContext } from './gql/common/GqlContext.js';
import { AppConfig } from './configModels/AppConfig.js';
import { DB } from './repositories/DB.js';


// configure log4js here...
const logger = log4js.getLogger();

export async function startServer() {
  // Load certs
  await DB.prepare();
  const httpServer = http.createServer();
  const apolloConfig: Config<ApolloContext> = {
    schema,
    context: GqlContext.create,
    logger,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer }), ApolloServerPluginLandingPageGraphQLPlayground()]
  };

  const server = new ApolloServer(apolloConfig);

  await server.start();

  const app = new Koa();

  // Add default error handling.
  app.use(async(ctx, next)=> {
    try {
      await next();
    } catch(err) {
      const msg = JSON.stringify(err || '');
      console.warn('server.koa.error', msg)
      ctx.status = 500;
      ctx.body = msg;
    }
  });
  // Add a body parser for tracing, etc.
  app.use(bodyParser());
  // Add tracing for requests and responses
  app.use(async(ctx, next) => {
    const headers = {
      ...JSON.parse(JSON.stringify({...ctx.request.headers}))
    };
    const trace = !ctx.request.URL.pathname.toLowerCase().startsWith('/.well-known');
    if(trace) {
      console.info('server.koa.request', {headers, body:ctx.request.rawBody});
    }
    await next();
    if(trace) {
      console.info('server.koa.response', ctx.response.body);
    }
  });

  server.applyMiddleware({ app });
  httpServer.on('request', app.callback());


  await new Promise<void>(resolve => httpServer.listen({ port: AppConfig.instance.gql.port }, resolve));

  console.log(`🚀 Server ready at http://localhost:${AppConfig.instance.gql.port}${server.graphqlPath}`);

  return { server, app };
}
