class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(val) {
    this.head = new Node(val);
  }

  add(val) {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(val);
  }
  removeTail() {
    let current = this.head;
    let temp;
    if (current === null) {
      return null;
      // edge case for 0
    }
    if (current.next === null) {
      temp = current.val;
      this.head = null;
      return temp;
      // edge case for 1
    }
    while (current.next.next) {
      current = current.next;
    }
    temp = current.next;
    current.next = null;
    return temp.val;
  }

  getList() {
    const listArr = [];
    let current = this.head;
    if (current === null) {
      return [];
    }
    while (current.next) {
      listArr.push(current.val);
      current = current.next;
    }
    listArr.push(current.val);
    return listArr;
  }
}

const list = new LinkedList("A");
console.log(list.head);
list.add("B");
console.log(list.getList());
list.add("C");
console.log(list.getList());
list.removeTail();
console.log(list.getList());
const otherList = new LinkedList(1);
otherList.removeTail();
console.log(otherList.getList());
// just be null
otherList.removeTail();
console.log(otherList.getList());
// also null but without breaking
const thirdList = new LinkedList(1);
thirdList.add(2);
thirdList.removeTail();
console.log(thirdList.getList());
// [ 1 ]

module.exports = { LinkedList };
