import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { GraphQLError } from 'graphql/index';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      path: 'api/v1',
      context: ({ req }) => ({ req }),
      playground: true,
      uploads: false,
      formatError: (error: GraphQLError) => {
        const originalError = error.extensions?.originalError;
        if (!originalError) {
          return {
            message: error?.message,
            code: error.extensions?.code,
          };
        }
        return {
          message: originalError,
          code: error.extensions?.code,
        };
      },
    }),
  ],
  providers: [],
  exports: [],
})
export class GqlModule {}
