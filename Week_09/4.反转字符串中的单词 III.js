// Method 1
var reverseWords = function (s) {
  const ret = [];
  const length = s.length;
  let i = 0;
  while (i < length) {
    let start = i;
    // charAt() 方法可返回指定位置的字符。
    while (i < length && s.charAt(i) != " ") {
      i++;
    }
    for (let p = start; p < i; p++) {
      ret.push(s.charAt(start + i - 1 - p));
    }
    while (i < length && s.charAt(i) == " ") {
      i++;
      ret.push(" ");
    }
  }
  return ret.join("");
};

// Method 2
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = s.split("").reverse().join("");
  return arr.split(" ").reverse().join(" ");
};
