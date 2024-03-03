import { Injectable } from '@nestjs/common';

@Injectable()
export class ArrayUtils {
  shuffleArray<T>(array: T[]): T[] {
    let currentIndex = array.length;
    let temporaryValue: T;
    let randomIndex: number;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // Check if two arrays are equal (have the same elements in the same order)
  arraysEqual<T>(array1: T[], array2: T[]): boolean {
    if (array1.length !== array2.length) {
      return false;
    }

    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }

    return true;
  }

  // Remove duplicate elements from an array
  removeDuplicates<T>(array: T[]): T[] {
    return [...new Set(array)];
  }

  // Partition an array into chunks of specified size
  chunkArray<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  // Check if an array contains a specific element
  contains<T>(array: T[], element: T): boolean {
    return array.includes(element);
  }

  // Find the index of the first occurrence of an element in an array
  indexOf<T>(array: T[], element: T): number {
    return array.indexOf(element);
  }

  // Remove the first occurrence of an element from an array
  remove<T>(array: T[], element: T): T[] {
    const index = array.indexOf(element);
    if (index !== -1) {
      array.splice(index, 1);
    }
    return array;
  }

  // Remove all occurrences of an element from an array
  removeAll<T>(array: T[], element: T): T[] {
    return array.filter((item) => item !== element);
  }

  // Find the intersection of two arrays (common elements)
  intersection<T>(array1: T[], array2: T[]): T[] {
    return array1.filter((item) => array2.includes(item));
  }

  // Find the difference between two arrays (elements in array1 but not in array2)
  difference<T>(array1: T[], array2: T[]): T[] {
    return array1.filter((item) => !array2.includes(item));
  }

  // Merge multiple arrays into a single array
  merge<T>(...arrays: T[][]): T[] {
    return [].concat(...arrays);
  }

  // Rotate elements of an array to the left by a given number of positions
  rotateLeft<T>(array: T[], positions: number): T[] {
    const length = array.length;
    const offset = positions % length;
    return array.slice(offset).concat(array.slice(0, offset));
  }

  // Rotate elements of an array to the right by a given number of positions
  rotateRight<T>(array: T[], positions: number): T[] {
    const length = array.length;
    const offset = length - (positions % length);
    return array.slice(offset).concat(array.slice(0, offset));
  }
}
