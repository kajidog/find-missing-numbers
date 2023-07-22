
# 002.find missing numbers.ipynb(問題)

配列numsの長さがnでnums[i] = 1〜n の整数が与えられます。 配列numsの中に出現しない数字を探してください。

可能なら、記憶するための変数を使用しない（setや新しい配列を作るなど）で、ループのみで探してください。  

## 課題として作成したfindMissingNumbers

`./findMissingNumbers.js`

```js
function findMissingNumbers(nums) {
  const answer = []; //1回実行
  let numPresence = []; //1回実行
  for (let i = 0; i < nums.length; i++) {
    numPresence[nums[i]] = true; //n回実行
  }
  for (let j = 1; j <= nums.length; j++) {
    if (numPresence[j] !== true) {
      answer.push(j); //n回実行
    }
  }
  return answer; //1回実行
}

/*
  nums: [ 5, 4, 4, 3, 1 ]
  answer: [ 2 ]
*/
```

**計算量** (最悪ケース)  
ステップ数: 1 + 1 + n + n + 1 = `3 + 2n`  
オーダ記法: ステップ数から最大次数の項以外と係数を除くので、`O(n)`  

## indexOfで実装したfindMissingNumbers

`findMissingNumbersIndexOf.js`

```js
export default function findMissingNumbersIndexOf(nums) {
  const answer = []; //1回実行
  for (let i = 1; i <= nums.length; i++) {
    let c = -1; //n回実行
    for (let j = 0; j < nums.length; j++) {
      if (i === nums[j]) {
        c = j; //n^2回実行
        break;
      }
    }
    if (c < 0) {
      answer.push(i); //n回実行
    }
  }
  return answer; //1回実行
}
/*
  nums: [ 5, 4, 4, 3, 1 ]
  answer: [ 2 ]
*/
```

**計算量** (最悪ケース)  
ステップ数: 1 + n + n^2 + n + 1 = `2 + 2n + n^2`  
オーダ記法: ステップ数から最大次数の項以外と係数を除くので、`O(n^2)`
