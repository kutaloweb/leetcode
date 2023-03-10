// 23. Merge k Sorted Lists

// Hard

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// Example 2:
// Input: lists = []
// Output: []

// Example 3:
// Input: lists = [[]]
// Output: []

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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// Merge Approach - making two lists and merging two of these lists
const mergeKLists = (lists) => {
  if (lists.length === 0) return null;
  while (lists.length > 1) {
    // Subtracting the two lists from list:
    // We just need to grab the first one
    let list1 = lists.shift(); // 1->2->4->null
    // We just need to grab the second one
    let list2 = lists.shift();
    printList(list2) // 1->3->4->null
    // Need to merge two lists - with separate function
    let merged = mergeTwoLists(list1, list2);
    // Need to update merged value into the lists
    lists.push(merged);
  }
  // Because it is in array of array
  return lists[0];
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  // Creating a dummy node before the original head - does not matter value it is
  let dummyNode = new ListNode(0); // 0->null
  // Using as a reference - at the last, we are returning this head
  let curr = dummyNode; // 0->null
  while (list1 && list2) { // 1->2->4->null 2->4->null 2->4->null 4->null 4->null && 1->3->4->null 1->3->4->null 3->4->null 3->4->null 4->null
    if (list1.val <= list2.val) { // 1<=1 2<=3 4<=4
      curr.next = list1
      // To move the pointer to the next
      list1 = list1.next; // 2->4->null 4->null null
    } else { // 2>1 4>3
      curr.next = list2;
      // To move the pointer to the next
      list2 = list2.next; // 3->4->null 4->null
    }
    // 0->1->2->4->null 1->1->3->4->null 1->2->4->null 2->3->4->null 3->4->null
    curr = curr.next; // Need to add the next value from one of these lists to the tail of dummy
    // 1->2->4->null 1->3->4->null 2->4->null 3->4->null 4->null
  }
  // Append to dummy the rest of the list
  curr.next = list1 === null ? list2 : list1;
  // Reference that we created at the start
  return dummyNode.next; // 1->1->2->3->4->4->null
};


let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);
let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);
printList(mergeKLists([l1, l2]));
