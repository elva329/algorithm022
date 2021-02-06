const generateParenthesis = (n) => {
  const res = []; // 解集

  const generate = (str, left, right) => {
    if (str.length == 2 * n) {
      // 字符串构建完成
      res.push(str); // 将字符串加入解集
      return; // 结束当前递归（结束当前搜索分支）
    }
    if (left > 0) {
      // 只要左括号有剩，可以选它，继续递归做选择
      generate(str + "(", left - 1, right);
    }
    if (right > left) {
      // 右括号的保有数量大于左括号的保有数量，才能选右括号
      generate(str + ")", left, right - 1);
    }
  };

  generate("", n, n); // 递归的入口，初始字符串是空字符串，初始括号数量都是n
  return res;
};

// Method 2

/**
 * @param {number} n
 * @return {string[]}
 * @param l 左括号已经用了几个
 * @param r 右括号已经用了几个
 * @param str 当前递归得到的拼接字符串结果
 * @param res 结果集
 */
const generateParenthesis = function (n) {
  const res = [];

  function dfs(l, r, str) {
    if (l == n && r == n) {
      return res.push(str);
    }
    // l 小于 r 时不满足条件 剪枝
    if (l < r) {
      return;
    }
    // l 小于 n 时可以插入左括号，最多可以插入 n 个
    if (l < n) {
      dfs(l + 1, r, str + "(");
    }
    // r < l 时 可以插入右括号
    if (r < l) {
      dfs(l, r + 1, str + ")");
    }
  }
  dfs(0, 0, "");
  return res;
};
