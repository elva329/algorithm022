// 用 HashMap 来映射 s 的字符和对应的出现次数。
// 然后遍历 t ，将对应的字符在 map 中的值减 1，如果所有 value 都变为 0，则返回 true。

// 最多只有 26 个小写字符，所以也可以用长度为 26 的整型数组。

// 标签：哈希映射
// 首先判断两个字符串长度是否相等，不相等则直接返回 false
// 若相等，则初始化 26 个字母哈希表，遍历字符串 s 和 t
// s 负责在对应位置增加，t 负责在对应位置减少
// 如果哈希表的值都为 0，则二者是字母异位词

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const hash = new Array(26).fill(0);
  const aCode = "a".charCodeAt(0); // charCodeAt()方法可返回指定位置的字符的 Unicode 编码。

  for (let i = 0; i < s.length; i++) {
    hash[s.charCodeAt(i) - aCode]++;
    hash[t.charCodeAt(i) - aCode]--;
  }

  for (const v of hash) {
    if (v != 0) {
      return false;
    }
  }
  return true;
};
