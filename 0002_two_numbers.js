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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let dummyNode = new ListNode(0);
  let current = dummyNode;
  let pointer1 = l1;
  let pointer2 = l2;
  let carryOver = 0;
  while (pointer1 || pointer2) {
    let sum = carryOver;
    sum += pointer1 ? pointer1.val : 0;
    sum += pointer2 ? pointer2.val : 0;
    carryOver = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    pointer1 = pointer1 && pointer1.next;
    pointer2 = pointer2 && pointer2.next;
  }
  if (carryOver > 0) current.next = new ListNode(carryOver);
  return dummyNode.next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers2 = (l1, l2) => {
  let dummyNode = new ListNode(0);
  let current = dummyNode;
  let pointer1 = l1;
  let pointer2 = l2;
  let carryOver = 0;
  while (pointer1 || pointer2) {
    let x = pointer1 ? pointer1.val : 0;
    let y = pointer2 ? pointer2.val : 0;
    let sum = x + y + carryOver;
    carryOver = Math.floor(sum / 10);
    sum = sum % 10;
    current.next = new ListNode(sum);
    pointer1 = pointer1 && pointer1.next;
    pointer2 = pointer2 && pointer2.next;
    current = current.next;
  }
  if (carryOver > 0) current.next = new ListNode(carryOver);
  return dummyNode.next;
};

// [2 -> 4 -> 3] + [5 -> 6 -> 4]
let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
console.log(addTwoNumbers(l1, l2));
console.log(addTwoNumbers2(l1, l2));

