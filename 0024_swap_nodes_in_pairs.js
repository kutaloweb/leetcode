// 24. Swap Nodes in Pairs

// Medium

// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without
// modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

// Example 1:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

// Example 2:
// Input: head = []
// Output: []

// Example 3:
// Input: head = [1]
// Output: [1]

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {ListNode} head
 */
const printList = head => {
  let res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  console.log(res.join('->') + '->null');
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Iteration
const swapPairs = (head) => {
  const dummyNode = new ListNode(0); // 0->null
  dummyNode.next = head;
  let prev = dummyNode; // 0->1->2->3->4->null
  let current = dummyNode.next; // 1->2->3->4->null
  while(current && current.next) { // current: 1->2->3->4->null 3->4->null
    const tmp = current.next.next; // 3->4->null
    prev.next = current.next; // 2->3->4->null 4->null
    current.next.next = current;
    current.next = tmp;
    prev = current; // 1->3->4->null 3->null
    current = current.next; // 3->4->null null
  }
  return dummyNode.next;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Recursion
const swapPairs2 = (head) => {
  // 1->2->3->4->null 3->4->null null
  if (head === null || head.next === null) { // head: null
    return head;
  }
  let tmp = head.next; // 2->3->4->null 4->null
  head.next = swapPairs2(tmp.next);
  tmp.next = head;
  return tmp;
};

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);
printList(swapPairs(l1));
let l2 = new ListNode(1);
l2.next = new ListNode(2);
l2.next.next = new ListNode(3);
l2.next.next.next = new ListNode(4);
printList(swapPairs2(l2));
