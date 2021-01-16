const findContentChildren = function (g, s) {
  let r = 0,
    i = g.length; // 一个孩子的胃口
  s.sort((a, b) => b - a);
  while (i--) {
    if (s[0] < g[i]) continue; // 最大饼干 都满足不了 跳过
    j = s.length;
    while (j--) {
      if (s[j] >= g[i]) { // 找满足胃口的最小饼干
        r++;
        s.splice(j, 1); // 吃
        break;
      }
    }
  }
  return r;
};
