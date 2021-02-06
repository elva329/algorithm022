// Method1: DFS

const solve = (board) => {
  const m = board.length;
  if (m == 0) return; // [] 情况的特判
  const n = board[0].length;
  const dfs = (i, j) => {
    if (i < 0 || i == m || j < 0 || j == n) return; // 越界了
    if (board[i][j] == "O") {
      // 遇到O，染为NO
      board[i][j] = "NO";
      dfs(i + 1, j); // 对四个方向的邻居进行dfs
      dfs(i - 1, j);
      dfs(i, j + 1);
      dfs(i, j - 1);
    }
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
        if (board[i][j] == "O") dfs(i, j); // 从最外层的O，开始DFS
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "NO") board[i][j] = "O";
      // 恢复为O
      else if (board[i][j] === "O") board[i][j] = "X"; // O变为X
    }
  }
};

// Method2: BFS
const solve = (board) => {
  const m = board.length;
  if (m == 0) return [];
  const n = board[0].length;
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]; 
  const bfs = (i, j) => {
    const queue = [[i, j]];
    board[i][j] = 'NO';                   // 入列的“root”染色一下
    while (queue.length) {
      const [curI, curJ] = queue.shift(); // 获取出列节点的i、j坐标
      for (const [dx, dy] of dirs) {      // 四个方向
        const x = curI + dx;              // 求出新坐标
        const y = curJ + dy;
        if (x < 0 || x == m || y < 0 || y == n) continue; // 越界了就忽略
        if (board[x][y] == 'O') {         // 是O，染色成XO
          board[x][y] = 'NO';   
          queue.push([x, y]);             // 染色成XO的节点入列
        }
      }
    }
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
        if (board[i][j] == 'O') bfs(i, j); // 从最外层的O，开始BFS
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'NO') board[i][j] = 'O';
      else if (board[i][j] === 'O') board[i][j] = 'X';
    }
  }
};