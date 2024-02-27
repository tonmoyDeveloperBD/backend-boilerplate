// // // graphqlI18n.middleware.ts
// // import { Injectable, NestMiddleware } from '@nestjs/common';
// // import { Request, Response, NextFunction } from 'express';
// //
// // @Injectable()
// // export class LanguageMiddleware implements NestMiddleware {
// //   use(req: Request, res: Response, next: NextFunction) {
// //     // Extract language information from the request, e.g., from headers, cookies, query params, etc.
// //     const lang = req.query['ln'] || 'en';
// //
// //     // Modify the GraphQL context to include the language information
// //     req['graphqlContext'] = {
// //       ...req['graphqlContext'],
// //       lang,
// //     };
// //
// //     next();
// //   }
// // }
//
// // lang.middleware.ts
// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';
//
// @Injectable()
// export class LangMiddleware implements NestMiddleware {
//   constructor() {}
//
//   async use(req: Request, res: Response, next: NextFunction) {
//     const lang = req.query.ln;
//     if (lang) {
//       console.log(lang);
//       //req.i18nLang = lang; // Set locale for the current request
//     }
//     next();
//   }
// }
