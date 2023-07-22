import { generateRandomNumbers } from "./index.js";

export default function findMissingNumbers(nums) {
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

  return answer;
}
