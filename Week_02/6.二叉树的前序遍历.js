const preorderTraversal = (root) => {
  const res = [];
  const preOrder = (root) => {
    if (root === null) return;
    res.push(root.val);
    preOrder(root.left);
    preOrder(root.right);
  };
  preOrder(root);
  return res;
};
