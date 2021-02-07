var LRUCache = class {
  constructor(capacity) {
    // 初始化 LRU 缓存
    this.cache = new Map();
    this.capacity = capacity;
  }

  // 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1
  get(key) {
    let cache = this.cache;
    if (cache.has(key)) {
      let temp = cache.get(key);
      cache.delete(key);
      cache.set(key, temp);
      return temp;
    } else {
      return -1;
    }
  }

  // 如果关键字已经存在，则变更其数据值；
  // 如果关键字不存在，则插入该组「关键字-值」。
  // 当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
  put(key, value) {
    let cache = this.cache;
    if (cache.has(key)) {
      cache.delete(key);
    } else if (cache.size >= this.capacity) {
      cache.delete(cache.keys().next().value);
    }
    cache.set(key, value);
  }
};
