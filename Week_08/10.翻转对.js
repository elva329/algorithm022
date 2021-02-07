var reversePairs = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let count = 0;

  function mergeSort(nums, start, end) {
    if (start == end) {
      return 0;
    }
    const mid = start + ((end - start) >> 1);
    mergeSort(nums, start, mid);
    mergeSort(nums, mid + 1, end);

    let i = start;
    let j = mid + 1;
    while (i <= mid && j <= end) {
      if (nums[i] > 2 * nums[j]) {
        count += mid - i + 1;
        j++;
      } else {
        i++;
      }
    }
    i = start;
    j = mid + 1;
    const temp = new Array(end - start + 1);
    let index = 0;
    while (i <= mid && j <= end) {
      if (nums[i] < nums[j]) {
        temp[index] = nums[i];
        index++;
        i++;
      } else {
        temp[index] = nums[j];
        index++;
        j++;
      }
    }
    while (i <= mid) {
      temp[index] = nums[i];
      index++;
      i++;
    }
    while (j <= end) {
      temp[index] = nums[j];
      index++;
      j++;
    }
    for (let i = start, k = 0; i <= end; i++, k++) {
      nums[i] = temp[k];
    }
  }

  mergeSort(nums, 0, nums.length - 1);
  return count;
};
