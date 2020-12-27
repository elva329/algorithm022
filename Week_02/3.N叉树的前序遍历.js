// Method 1 递归
const preorder = function (root) {
  if (!root) return [];

  const res = [];
  recusion(root);
  return res;

  function recusion(root) {
    if (!root) return;
    res.push(root.val);

    for (let i = 0; i < root.children.length; i++) { // root.children遍历所有子节点
      recusion(root.children[i]);
    }
  }
};

// Method 2 迭代
const preorder = function (root) {
  if (!root) return [];

  const res = [],
    arr = [root];
  while (arr.length) {
    const current = arr.pop();
    res.push(current.val);

    for (let i = current.children.length - 1; i >= 0; i--) {
      arr.push(current.children[i]);
    }
  }
  return res;
};

// Test case
preorder([1, null, 3, 2, 4, null, 5, 6]);
