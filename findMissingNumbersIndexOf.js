import { generateRandomNumbers } from "./index.js";

export default function findMissingNumbersIndexOf(nums, before) {
  let step = 1;
  const answer = [];
  step++;
  for (let i = 1; i <= nums.length; i++) {
    let c = -1;
    step++;
    for (let j = 0; j < nums.length; j++) {
      step++;
      if (i === nums[j]) {
        c = j;
        break;
      }
    }
    step++;
    if (c < 0) {
      answer.push(i);
    }
  }

  const data = {
    n: nums.length,
    step: step,
    up: step / before.step + "倍",
  };

  console.log(data);

  if (nums.length < before.max) {
    findMissingNumbersIndexOf(
      generateRandomNumbers(nums.length * before.multiple),
      {
        ...before,
        ...data,
      }
    );
  }
  return answer;
}
