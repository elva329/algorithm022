/**
 * @param {string} s
 * @return {string}
 */

// 使用 split 将字符串按空格分割成字符串数组；
// 使用 reverse 将字符串数组进行反转；
// 使用 join 方法将字符串数组拼成一个字符串。

// Method 1
var reverseWords = function (s) {
  return s
    .trim()
    .split(" ")
    .filter((item) => item !== "")
    .reverse()
    .join(" ");
};

// Method 2
var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(" ");
};
