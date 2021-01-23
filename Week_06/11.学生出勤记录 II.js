var checkRecord = function (n) {
  const mod = 1e9 + 7;
  const transitions = [[0, 1, 3], [0, 2, 3], [0, 3], [3, 4], [3, 5], [3]];
  let counts = [1, 0, 0, 0, 0, 0];
  for (let i = 0; i < n; i++) {
    const counts2 = Array(6).fill(0);
    for (let i = 0; i < counts.length; i++) {
      const count = counts[i];
      for (const state of transitions[i]) {
        counts2[state] += count;
        counts2[state] %= mod;
      }
    }
    counts = counts2;
  }
  return counts.reduce((a, b) => a + b) % mod;
};
