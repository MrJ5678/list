function listToArray1(l) {
  let result = [];
  while (l) {
    result.push(l.val);
    l = l.next;
  }

  return result;
}

// {
//   val: null,
//   next: null
// }

function listToArray2(l) {
  if (l === null) return [];
  let tail = l.next;
  let tailArray = listToArray2(tail);
  tailArray.unshift(l.val);
  return tailArray;
}
