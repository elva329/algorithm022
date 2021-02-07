function bucketSort(arr, bucketSize) {
  if(arr.length === 0) {
    return arr;
  }

  const i;
  const minValue = arr[0];
  const maxValue = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < minValue) {
        minValue = arr[i];               // 输入数据的最小值
    } else if(arr[i] > maxValue) {
        maxValue = arr[i];               // 输入数据的最大值
    }
  }

  // 桶的初始化
  const DEFAULT_BUCKET_SIZE = 5;           // 设置桶的默认数量为5
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;  
  const buckets = newArray(bucketCount);
  for(let i = 0; i < buckets.length; i++) {
      buckets[i] = [];
  }

  // 利用映射函数将数据分配到各个桶中
  for(let i = 0; i < arr.length; i++) {
      buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
  }

  arr.length = 0;
  for(let i = 0; i < buckets.length; i++) {
      insertionSort(buckets[i]);                     // 对每个桶进行排序，这里使用了插入排序
      for(let j = 0; j < buckets[i].length; j++) {
          arr.push(buckets[i][j]);                     
      }
  }

  return arr;
}