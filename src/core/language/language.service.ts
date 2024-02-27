// import { Injectable } from '@nestjs/common';
// import * as fs from 'fs';
// import * as path from 'path';
//
// @Injectable()
// export class LanguageService {
//   constructor() {}
//
//   async translate(key: string, lang: string): Promise<string> {
//     // Path to your translation files directory
//     const translationsDir = path.join(__dirname, '../../../src/core/language/key/');
//
//     // Construct the path to the translation file for the specified language
//     const filePath = path.join(translationsDir, `${lang}.json`);
//
//     try {
//       // Read the translation file
//       const data = fs.readFileSync(filePath, 'utf8');
//       const translations = JSON.parse(data);
//
//       // Retrieve the translation for the specified key
//       const translation = translations[key];
//
//       if (translation) {
//         return translation;
//       } else {
//         // If translation is not found, you might handle this case based on your application logic
//         return `Translation not found for key: ${key}`;
//       }
//     } catch (error) {
//       // Handle errors such as file not found, invalid JSON, etc.
//       console.error('Error reading translation file:', error);
//       return `Error reading translation file for language ${lang}`;
//     }
//   }
// }
