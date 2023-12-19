function createNode(val) {
  return {
    val,
    next: null
  };
}
function prepend(val, head) {
  let node = createNode(val);
  node.next = head;

  return node;
}

function append(val, head) {
  let node = createNode(val);
  if (head === null) return node;
  let p = head;
  while (p.next) {
    p = p.next;
  }
  p.next = node;

  return head;
}

function nth(l, idx) {
  if (l === null) return undefined;
  let p = l;
  for (let i = 0; i < idx && p.next; i++) {
    p = p.next;
  }
  if (i === idx) {
    return p.val;
  } else {
    return undefined;
  }
}

function nth2(l, idx) {
  if (l === null) return undefined;
  if (idx === 0) return l.val;

  return nth2(l.next, idx - 1);
}
