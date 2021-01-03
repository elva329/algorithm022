const combine = (n, k) => {
  const res = [];

  const helper = (start, path) => { // start是枚举选择的起点 path是当前构建的路径（组合）
    if(path.length === k) {
      res.push(path.slice()) // 拷贝一份path，推入res
      return
    }

    for(let i = start; i <= n ; i++) {
      path.push(i)
      helper(i + 1, path)
      path.pop()
    }
  }
  helper(1, [])
  return res;
}