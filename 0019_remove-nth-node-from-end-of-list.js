// 19. Remove Nth Node From End of List

// Medium

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// [1] => [2] => [3] => [4] => [5]
// [1] => [2] => [3] =>  =  => [5]
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
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

// One Pass, Two Pointers (Fast, Slow)

// To remove n-th node from the end, send node fast as far as n.
// Move node slow and fast in same speed until fast gets the last node.
// Since slow and fast has gap as n, curr has n+1-th node from the end when fast has 1th node from the end.
// So change curr.next to curr.next.next.
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  // Dummy is to avoid head deleted and deal with edge cases such as empty list
  const dummyNode = new ListNode(0); // 0->null
  dummyNode.next = head; // 1->2->3->4->5
  let fast = head; // 1->2->3->4->5
  let slow = dummyNode; // 0->1->2->3->4->5->null
  // Move first pointer so that first and second is n nodes apart
  for (let i = 0; i < n; i++) {
    fast = fast.next; // 2->3->4->5->null 3->4->5->null
  }
  // Until the right pointer reaches the end of the list move both pointers up by one
  while (fast) {
    fast = fast.next; // 4->5->null 5->null null
    slow = slow.next; // 1->2->3->4->5->null 2->3->4->5->null 3->4->5->null
  }
  // When the right pointer is at the end of the list, left pointer will be at n-1th node from the end
  // so, we can remove the nth node by making the left pointer point to two nodes ahead of it
  slow.next = slow.next.next; // 5->null
  // Return the current head saved to dummy head's next node
  // dummyNode 0->1->2->3->5->null, dummyNode.next 1->2->3->5->null
  return dummyNode.next;
};

let l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = new ListNode(3);
l.next.next.next = new ListNode(4);
l.next.next.next.next = new ListNode(5);

console.log(removeNthFromEnd(l, 2));
printList(l);