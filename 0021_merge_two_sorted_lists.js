// 21. Merge Two Sorted Lists

// Easy

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together
// the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  let dummyNode = new ListNode(0); // 0->null
  let curr = dummyNode; // 0->null
  while (list1 && list2) { // 1->2->4->null 2->4->null 2->4->null 4->null 4->null && 1->3->4->null 1->3->4->null 3->4->null 3->4->null 4->null
    if (list1.val <= list2.val) { // 1<=1 2<=3 4<=4
      curr.next = list1
      list1 = list1.next; // 2->4->null 4->null null
    } else { // 2>1 4>3
      curr.next = list2;
      list2 = list2.next; // 3->4->null 4->null
    }
    // 0->1->2->4->null 1->1->3->4->null 1->2->4->null 2->3->4->null 3->4->null
    curr = curr.next;
    // 1->2->4->null 1->3->4->null 2->4->null 3->4->null 4->null
  }
  curr.next = list1 === null ? list2 : list1;
  return dummyNode.next;
};

// Recursive
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists2 = (list1, list2) => {
  // (1->2->4->null 2->4->null 3->4->null 4->null 4->null null, 1->3->4->null 1->3->4->null 2->4->null 3->4->null 4->null 4->null)
  if (list1 === null) {
    return list2; // 4->null
  }
  if (list2 === null) {
    return list1; // none
  }
  if (list1.val <= list2.val) { // 1<=1 4<=4
    list1.next = mergeTwoLists2(list1.next, list2);
    return list1; // 4->4->null 1->1->2->3->4->4->null
  } else { // 2>1 3>2 4>3
    list2.next = mergeTwoLists2(list2.next, list1);
    return list2; // 3->4->4->null 2->3->4->4->null 1->2->3->4->4->null
  }
}

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);
let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);
printList(mergeTwoLists(l1, l2));
let l3 = new ListNode(1);
l3.next = new ListNode(2);
l3.next.next = new ListNode(4);
let l4 = new ListNode(1);
l4.next = new ListNode(3);
l4.next.next = new ListNode(4);
printList(mergeTwoLists2(l3, l4));