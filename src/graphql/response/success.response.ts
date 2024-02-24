// import { Scalar, CustomScalar } from '@nestjs/graphql';
// import { GraphQLScalarType, Kind } from 'graphql';
//
// interface SuccessResponseData<T> {
//   data: T;
//   code: number;
//   status: string;
// }
//
// export class SuccessResponse<T> {
//   constructor(
//     public data: T,
//     public code: number,
//     public status: string,
//   ) {}
//
//   static create<T>(data: T, code: number = 200, status: string = 'SUCCESS'): SuccessResponse<T> {
//     return new SuccessResponse<T>(data, code, status);
//   }
// }
//
// @Scalar('SuccessResponse', () => SuccessResponse)
// export class SuccessResponseScalar implements CustomScalar<any, SuccessResponse<any>> {
//   description = 'SuccessResponse custom scalar type';
//
//   parseValue(value: any): SuccessResponse<any> {
//     // Validate and parse your input value here if needed
//     return SuccessResponse.create(value.data, value.code, value.status);
//   }
//
//   serialize(value: SuccessResponse<any>): SuccessResponse<any> {
//     // Serialize your SuccessResponse object here if needed
//     return value;
//   }
//
//   parseLiteral(ast: any): SuccessResponse<any> {
//     if (ast.kind === Kind.OBJECT) {
//       // Parse the AST literal here if needed
//       return ast.value;
//     }
//     return null;
//   }
// }
