/*
标签：哈希映射
首先判断两个字符串长度是否相等，不相等则直接返回 false
若相等，则初始化26个字母哈希表，遍历字符串s和t
s负责在对应位置增加，t负责在对应位置减少
如果哈希表的值都为0，则二者是字母异位词
*/

const isAnagram = function(s, t) {
  if(s.length !== t.length) return false

  const hash = new Array(26).fill(0)
  const aCode = 'a'.charCodeAt(0) // 返回字符串第一个字符的Unicode 编码

  for (let i = 0; i < s.length; i++) {
    hash[s.charCodeAt(i) - aCode]++;
    hash[t.charCodeAt(i) - aCode]--;
  }

  for(const v of hash) { // for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句
    if(v !== 0) {
      return false
    }
  }
  return true
}

// Test Case
isAnagram("anagram", "nagaram")