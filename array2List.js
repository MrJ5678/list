function createNode(val) {
  return {
    val,
    next: null
  };
}

function arrayToList1(ary) {
  if (ary.length === 0) {
    return null;
  }
  let space = [];
  for (let i = 0; i < ary.length; i++) {
    space[i] = createNode(ary[i]);
  }
  for (let j = 0; j < space.length - 1; j++) {
    space[j].next = space[j + 1];
  }

  return space[0];
}

function arrayToList2(ary) {
  let prev = null;
  for (let i = ary.length - 1; i >= 0; i--) {
    let node = createNode(ary[i]);
    node.next = prev;
    prev = node;
  }
  return prev;
}

function arrayToList3(ary) {
  let dummy = createNode(null);
  let prev = dummy;
  for (let i = 0; i < ary.length; i++) {
    let node = createNode(ary[i]);
    prev.next = node;
    prev = node;
  }

  return dummy.next;
}

function arrayToList4(ary, start = 0) {
  if (start === ary.length) return null;
  let head = createNode(ary[start]);
  head.next = arrayToList4(ary, start + 1);

  return head;
}
