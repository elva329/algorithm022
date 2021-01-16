const canJump = function (nums) {
  let n = nums.length;
  let rightMost = 0;
  for (let i = 0; i < n; i++) {
    if (i <= rightMost) {
      rightMost = Math.max(rightMost, i + nums[i]);
      if (rightMost >= n - 1) {
        return true;
      }
    }
  }
  return false;
};
