/* Method 1 */
/* 时间复杂度：O(N^2) ,其中 NN 是数组中的元素数量。最坏情况下数组中任意两个数都要被匹配一次.
空间复杂度：O(1)。 */

const twoSum = (nums, target) => {
  for(i = 0; i < nums.length; i++) {
    for(j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, i]
      }
    }
  }
}

// Method 2
const twoSum = (nums, target) => {
  const prevNums = {} // 用 hashMap 存储遍历过的元素和对应的索引。
  for(let i = 0 ; i < nums.length; i++) {
    const curNum = nums[i]
    const targetNum = target - curNum
    const targetNumIndex = prevNums[targetNum]
    if(targetNumIndex !== undefined) {
      return [targetNumIndex, i]
    } else {
      prevNums[curNum] = i
    }
  }
}

// Method 3
const twoSum = (nums, target) => {
  const map = new Map()
  for(let i = 0; i < nums.length; i++) {
    if(map.has(nums[i])) {
      return [map.get(nums[i]), i]
    } else {
      map.set(target - nums[i], i)
    }
  }
}

// Test Case
twoSum([2, 7, 11, 15], 9)