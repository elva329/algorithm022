// Method 1
const maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) profit += prices[i + 1] - prices[i];
  }
  return profit;
};


// Method 2
const maxProfit = function (prices) {
  let profit = 0; // 收益
  for (let i = 1; i < prices.length; i++) {
    const diff = prices[i] - prices[i - 1]; // 今天和昨天的差价
    if (diff > 0) {
      profit += diff;
    }
  }
  return profit;
};
