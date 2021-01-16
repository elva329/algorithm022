/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// Method 1
var searchMatrix = function (matrix, target) {
  const newMatrix = matrix.flat(Infinity);
  if (newMatrix.includes(target)) return true;
  return false;
};

// Method 2 Time complexity O(m + n)
function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  let row = 0;
  let col = matrix[0].length - 1;

  while (col >= 0 && row <= matrix.length - 1) {
    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] > target) col--;
    else if (matrix[row][col] < target) row++;
  }
  return false;
}
