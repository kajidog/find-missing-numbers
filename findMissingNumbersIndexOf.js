import { generateRandomNumbers } from "./index.js";

export default function findMissingNumbersIndexOf(nums) {
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

  step++; //return answer; のステップをここでカウント

  return answer;
}
