// Method 1
var moveZeroes = (nums) => {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[j]
      nums[j] = nums[i]
      nums[i] = temp
      j++
    }
  }
}

/* Method 2 双指针交换 */
var moveZeroes = function (nums) {
    let i = 0, j = 0;
    while (i < nums.length) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j++;
        } else {
            i++;
        }
    }
};

/* Method 3 非0项覆盖到数组前头 */
var moveZeroes = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) { // 遇到非0项
            nums[j] = nums[i]; // 覆盖到j上
            j++;    // j后移
        }
    }
    for (let i = j; i < nums.length; i++) { // 剩下的位置赋为0
        nums[i] = 0;
    }
};

// Test Case
moveZeroes([0, 1, 0, 3, 12])