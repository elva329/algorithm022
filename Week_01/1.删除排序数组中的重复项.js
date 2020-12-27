const removeDuplicates = function (nums) {
  let j = 0;
  let n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[i - 1]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};

// Test Case
removeDuplicates([1, 1, 2])