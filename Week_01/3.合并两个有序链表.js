const mergeTwoList = function (l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoList(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoList(l2.next, l1);
    return l2;
  }
};

// Test Case
mergeTwoList([1,2,4], [1,3,4])