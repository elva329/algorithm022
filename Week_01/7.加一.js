// 除 9之外的数字加一；
// 数字9。

var plusOne = function (digits) {
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;
    if (digits[i] != 0) return digits;
  }
  // 当位数需要发生变化时，99-->100,999-->1000,9999-->10000,这种情况下数组需要扩容
  // 故len+1,而扩容后的数均为1，故数组第一个元素即下标为零的元素=1
  digits = [...Array(len + 1)].map((_) => 0); // 返回长度为len+1 的数组, 里面的元素都是 0
  digits[0] = 1;
  return digits;
};
