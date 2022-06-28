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

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(val) {
    if (val < this.value) {
      if (!this.left) {
        this.left = new BinaryTreeNode(val);
      } else {
        this.left.add(val);
      }
    } else {
      if (!this.right) {
        this.right = new BinaryTreeNode(val);
      } else {
        this.right.add(val);
      }
    }
  }
}

class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(person) {  // val here is { name: some string }
    if (person.name  <this.value) {
      if (!this.left) {
        this.left = new PersonTreeNode(person);
      } else {
        this.left.add(person);
      }
    } else {
      if (!this.right) {
        this.right = new PersonTreeNode(person);
      } else {
        this.right.add(person);
      }
    }
  }
  
  findPerson(name) {
    if (this.value === name) {
      return this.person;
    }
    if (name < this.value) {
      if (this.left) {
        return this.left.findPerson(name);
      } else {
        return 'not in the tree boss';
      }
    } else {
      if (this.right) {
        return this.right.findPerson(name);
      } else {
        return 'not in the tree boss';
      }
    }
    // Implement me!
  }
}

// PersonTree tests

console.log('Jimbo' > 'Fred');
const jimbo = { name: 'Jimbo' };
const personTree = new PersonTreeNode(jimbo);
console.log(personTree.findPerson('Jimbo'));
personTree.add( { name: 'Fred' });
personTree.add( { name: 'Bill' });
personTree.add( { name: 'Xyzzory' });
console.log(personTree.findPerson('Xyzzory'));
console.log(personTree.findPerson('Bill'));
console.log(personTree.findPerson('Fred'));
console.log(personTree.findPerson('nonexistent person'));

// Binary Tree tests

// const tree = new BinaryTreeNode(5);
// console.log(tree);
// tree.add(1);
// console.log(tree);
// tree.add(8);
// console.log(tree);
// tree.add(9);
// console.log(tree);

// Linked List tests

// const list = new LinkedList("A");
// console.log(list.head);
// list.add("B");
// console.log(list.getList());
// list.add("C");
// console.log(list.getList());
// list.removeTail();
// console.log(list.getList());
// const otherList = new LinkedList(1);
// otherList.removeTail();
// console.log(otherList.getList());
// // just be null
// otherList.removeTail();
// console.log(otherList.getList());
// // also null but without breaking
// const thirdList = new LinkedList(1);
// thirdList.add(2);
// thirdList.removeTail();
// console.log(thirdList.getList());
// // [ 1 ]

module.exports = { LinkedList };
