// Time complexity: O(NK) Space complexity: O(1)

/* Method 1 */
const rotate = (nums, k) => {
  while (k--) {
    // unshift()可向数组的开头添加一个或更多的元素，并返回新的长度
    // pop()用于删除并返回数组的最后一个元素
    nums.unshift(nums.pop());
  }
};


/* Method 2 */
const rotate = (nums, k) => {
  let [start, count] = [0, 0];
  while (count < nums.length) {
    let [current, prev] = [start, nums[start]];
    do {
      current = (current + k) % nums.length;
      [nums[current], prev] = [prev, nums[current]];
      count++;
    } while (current !== start);
    start++;
  }
};


// Test Case
rotate([1, 2, 3, 4, 5, 6, 7], 3);