/**
 * @param {number[]} nums
 * @return {number}
 */

// Method 1
var findMin = function(nums) {
  const newNums = nums.sort((a, b) => a - b)
  return newNums[0]
};

// Method 2
const findMin = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    // const mid = left + ((right - left) >>> 1) 位运算求中间数或者下面Math.floor的方式;
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};