// import { Module } from '@nestjs/common';
// import * as path from 'path';
// import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
// import { LanguageService } from '@/core/language/language.service';
//
// @Module({
//   imports: [
//     I18nModule.forRoot({
//       fallbackLanguage: 'en',
//       loaderOptions: {
//         path: path.join(__dirname, '../../../src/core/language/locales/'),
//         watch: true,
//       },
//       resolvers: [{ use: QueryResolver, options: ['lang'] }, AcceptLanguageResolver],
//     }),
//   ],
//   providers: [LanguageService],
//   exports: [LanguageService],
// })
// export class LanguageModule {}
