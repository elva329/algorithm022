var canCross = function (stones) {
  function recurse(i, k) {
    const last = stones[i];
    for (let j = i - 1; j >= 0; j--) {
      const dst = last - stones[j];
      if (dst > j + 1) return false;
      if (k) {
        if (dst > k + 1) return false;
        if (dst < k - 1) continue;
      }
      if (recurse(j, dst)) return true;
    }
    return true;
  }

  return recurse(stones.length - 1, 0);
};
