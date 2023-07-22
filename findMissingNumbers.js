import { generateRandomNumbers } from "./index.js";

export default function findMissingNumbers(nums, before) {
  let step = 0;
  const answer = [];
  step++;
  let numPresence = [];
  step++;
  for (let i = 0; i < nums.length; i++) {
    numPresence[nums[i]] = true;
    step++;
  }
  for (let j = 1; j <= nums.length; j++) {
    if (numPresence[j] !== true) {
      answer.push(j);
    }
    step++;
  }

  step++; //return answer; のステップをここでカウント

  // ここからは計算量の表示
  const data = {
    n: nums.length,
    step: step,
    up: step / before.step + "倍",
  };
  console.log(data);

  // 指定倍大きいnumsで実行
  if (nums.length < before.max) {
    findMissingNumbers(generateRandomNumbers(nums.length * before.multiple), {
      ...before,
      ...data,
    });
  }

  return answer;
}
