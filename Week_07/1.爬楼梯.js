/**
 * @param {number} n
 * @return {number}
 */

// Method 1
var climbStairs = function (n) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// Method 2

const climbStairs = (n) => {
  let prev = 1;
  let cur = 1;
  for (let i = 2; i < n + 1; i++) {
    const temp = cur; // 暂存上一次的cur
    cur = prev + cur; // 当前的cur = 上上次cur + 上一次cur
    prev = temp; // prev 更新为 上一次的cur
  }
  return cur;
};
