// 2. Add Two Numbers

// Medium

// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let dummyNode = new ListNode(0); // 0->null
  let current = dummyNode; // 0->null
  let carryOver = 0;
  while (l1 || l2) { // 2->4->3->null 4->3->null 3->null || 5->6->4->null ...
    let x = l1 ? l1.val : 0; // 2 4 3
    let y = l2 ? l2.val : 0; // 5 6 4
    let sum = x + y + carryOver; // 7 10 8
    carryOver = Math.floor(sum / 10); // 0 1 0
    let lastDigit = sum % 10; // 7 0 8
    current.next = new ListNode(lastDigit); // 7->null 0->null 8->null
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
    current = current.next; // 7->null 0->null 8->null
  }
  if (carryOver > 0) {
    current.next = new ListNode(carryOver); // none
  }
  return dummyNode.next;
};

// [2 -> 4 -> 3] +
// [5 -> 6 -> 4]
// -------------
// [7 -> 0 -> 1 + 7]
let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
printList(addTwoNumbers(l1, l2));

