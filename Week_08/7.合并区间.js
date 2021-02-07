var merge = function (intervals) {
  if (intervals.length === 0) return [];
  let res = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let candidate = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i];
    if (candidate[1] >= cur[0]) {
      // 有重合 能合并
      candidate[1] = Math.max(cur[1], candidate[1]); // 左端不变 右端取大的
    } else {
      // 不重合 不能合并
      res.push(candidate);
      candidate = cur;
    }
  }
  res.push(candidate);
  return res;
};
