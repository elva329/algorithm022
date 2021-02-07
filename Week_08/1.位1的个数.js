// n & (n - 1) 可以消除 n 最后的一个1的原理 简化操作
// bit 运算

var hammingWeight = function (n) {
  let count = 0;
  while (n !== 0) {
    n = n & (n - 1);
    count++;
  }

  return count;
};
