var reverseOnlyLetters = function (S) {
  var arr = S.match(/[a-zA-Z]/g);
  if (arr === null) return S;
  return S.replace(/[a-zA-Z]/g, () => arr.pop());
};
