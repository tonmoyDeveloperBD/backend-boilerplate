import { Injectable } from '@nestjs/common';

@Injectable()
export class StringUtils {
  // Generate a UUID
  generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  // Generate a random string of specified length
  generateRandomString(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  // Convert a string to Capitalize (e.g., "hello world" => "HELLO WORLD")
  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Convert a string to truncate (e.g., "hello world" => "hello...")
  truncate(str: string, maxLength: number): string {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
  }

  // Convert a string to kebab-case (e.g., "Hello World" => "hello-world")
  kebabCase(str: string): string {
    return str.replace(/\s+/g, '-').toLowerCase();
  }

  // Convert a string to snake_case (e.g., "Hello World" => "hello_world")
  snakeCase(str: string): string {
    return str.replace(/\s+/g, '_').toLowerCase();
  }

  // Convert a string to CamelCase (e.g., "hello world" => "HelloWorld")
  camelCase(str: string): string {
    return str.replace(/\s+(.)/g, (_, match) => match.toUpperCase());
  }

  // Count the occurrences of a substring within a string
  countOccurrences(str: string, substring: string): number {
    return str.split(substring).length - 1;
  }

  // Check if a string contains only alphabets
  isAlpha(str: string): boolean {
    return /^[a-zA-Z]+$/.test(str);
  }

  // Check if a string contains only numeric characters
  isNumeric(str: string): boolean {
    return /^\d+$/.test(str);
  }
}
