// 时间复杂度是O(N)O(N)，空间复杂度是O(N)O(N)。

const nthUglyNumber = function (n) {
  const res = new Array(n);
  res[0] = 1;

  let ptr2 = 0; // 下个数字永远 * 2
  let ptr3 = 0; // 下个数字永远 * 3
  let ptr5 = 0; // 下个数字永远 * 5

  for (let i = 1; i < n; ++i) {
    // 在循环过程中，每次选取 2 * res[ptr2]、3 * res[ptr3] 和 5 * res[ptr5]这三个数中结果最小的数
    res[i] = Math.min(res[ptr2] * 2, res[ptr3] * 3, res[ptr5] * 5);
    if (res[i] === res[ptr2] * 2) {
      ++ptr2; // 将对应的指针向前移动。
    }
    if (res[i] === res[ptr3] * 3) {
      ++ptr3;
    }
    if (res[i] === res[ptr5] * 5) {
      ++ptr5;
    }
  }
  return res[n - 1]; // 有效循环是 n 次，当循环结束后，res 数组中就按从小到大的顺序保存了丑数。
};
