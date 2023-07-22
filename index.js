import findMissingNumbers from "./findMissingNumbers.js";
import findMissingNumbersIndexOf from "./findMissingNumbersIndexOf.js";

export function generateRandomNumbers(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(Math.floor(Math.random() * n) + 1);
  }
  return result;
}

const N = 10;

const nums = generateRandomNumbers(N);
const res = findMissingNumbers(nums);
const res2 = findMissingNumbersIndexOf(nums);
console.log("nums:", nums);
console.log("findMissingNumbers(課題):", res);
console.log("findMissingNumbers(indexOf使用):", res2);
