import { GraphQLError } from 'graphql/index';

export class ErrorResponse extends GraphQLError {
  constructor(message: string, code: number, status: string) {
    super(message, null, null, null, null, null, {
      code,
      status,
    });
  }
}
