// 25. Reverse Nodes in k-Group

// Hard

// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list.
// If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Example 2:
// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  // (1->2->3->4->5->null, 2) (3->4->5->null, 2) (5->null, 2)
  // check if list or k is empty
  if (head === null || head.next === null) { // head: 5->null head.next: null
    return head;
  }
  let tail = head; // 1->2->3->4->5->null 3->4->5->null
  // if list length is not smaller than k -1, then assign first k nodes to tail
  for (let i = 0; i < k - 1; i++) { // 0<1 0<1
    tail = tail.next; // 2->3->4->5->null 4->5->null
    // if head length is smaller than k, return head itself
    if (!tail) {
      return head; // none
    }
  }
  // remaining nodes
  let next = tail.next; // 3->4->5->null 5->null
  tail.next = null;
  // sort the list part in reverse order
  reverse(head);
  // recur the remaining list part
  head.next = reverseKGroup(next, k);
  // return tail
  return tail; // 4->3->5->null 2->1->4->3->5->null
};

function reverse(curr) {
  let prev = null;
  while (curr) { // 1->2->null 3->4->null
    let next = curr.next; // 2->null null 4->null null
    curr.next = prev;
    prev = curr; // 1->null 2->1->null 3->null 4->3->null
    curr = next; // 2->null null 4->null null
  }
  return prev; // 2->1->null 4->3->null
}

let l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = new ListNode(3);
l.next.next.next = new ListNode(4);
l.next.next.next.next = new ListNode(5);
printList(reverseKGroup(l, 2));
