/*
 哈希表 
 维护一个哈希映射 ans : {String -> List}，其中每个键 K 是一个排序字符串，每个值是初始输入的字符串列表，排序后等于 K。
 时间复杂度：O(NKlogK)，其中 N 是 strs 的长度，而 K 是 strs 中字符串的最大长度。
 当我们遍历每个字符串时，外部循环具有的复杂度为 O(N)。然后，我们在 O(KlogK) 的时间内对每个字符串排序。
 */
const groupAnagrams = function(strs) {
  let hash = new Map()

  for(let i = 0; i < strs.length; i++) {
    let str = strs[i].split('').sort().join() //a,e,t  a,e,t  a,n,t a,e,t a,n,t a,b,t
    if(hash.has(str)) {
      let temp = hash.get(str)
      temp.push(strs[i])
      hash.set(str, temp)
    } else {
      hash.set(str, [strs[i]])
    }
  }
  return [...hash.values()]
}

// Test Case
groupAnagrams(["eat","tea","tan","ate","nat","bat"])