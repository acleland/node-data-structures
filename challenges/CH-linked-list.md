## Linked List

A LinkedList is a linear data structure, however elements are not stored in contiguous locations like arrays, they are linked with each other using pointers. Each element of the LinkedList has the reference(address/pointer) to the next element of the LinkedList.

## Challenge

Implement `LinkedListNode` as a data structure (a `class`) that has:

- `value` property represented by this node. It should be initialized via the constructor
- `next` property (`null` if empty) that points to the next node
- `add(node)` method that takes a `node` of type `LinkedListNode`. If current node already has `next`, it should use recursion to delegate to the `next` node's `add(node)` method.
- `getList()` method that returns a string with values in order. Should use recursion to delegate.

## Test Cases

```js
const list = new LinkedList("A");
list.add("B");
console.log(root.getList()); // 'A B'

list.add("C");
list.add("D");
list.add("E");
console.log(list.getList()); // 'A B C D E'
```
