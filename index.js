import findMissingNumbers from "./findMissingNumbers.js";
import findMissingNumbersIndexOf from "./findMissingNumbersIndexOf.js";

export function generateRandomNumbers(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(Math.floor(Math.random() * n) + 1);
  }
  return result;
}
const INIT_DATA = {
  multiple: 10,
  max: 10000,
};
const nums = generateRandomNumbers(5);
console.table(INIT_DATA);
console.log("findMissingNumbers(課題): O(n)");

const res = findMissingNumbers(nums, INIT_DATA);
console.log("----------");
console.log("findMissingNumbers(indexOf使用): O(n^2)");
const res2 = findMissingNumbersIndexOf(nums, INIT_DATA);
console.log("----------");
console.log("nums:", nums);
console.log("findMissingNumbers(課題):", res);
console.log("findMissingNumbers(indexOf使用):", res2);
