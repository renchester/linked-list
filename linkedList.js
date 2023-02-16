import ListNode from './listNode';

export default class LinkedList {
  constructor(head) {
    this.head = head || null;
  }

  append(value) {
    // adds a new node containing value to the end of the list

    if (this.head === null) {
      this.head = this.prepend(value);
    } else {
      let temp = this.head;

      while (temp !== null) temp = temp.nextNode;

      temp = new ListNode(value);
    }
  }

  prepend(value) {
    // adds a new node containing value to the start of the list

    let temp = this.head;

    this.head = new ListNode(value, temp);
  }

  size() {
    // returns the total number of nodes in the list

    let length = 0;
    let temp = this.head;

    while (temp !== null) {
      length++;
      temp = temp.nextNode;
    }

    return length;
  }

  head() {
    // returns the first node in the list

    return this.head;
  }

  tail() {
    // returns the last node in the list
    let temp = this.head;

    while (temp.value !== null) temp = temp.nextNode;

    return temp;
  }

  at(index) {
    // returns the node at the given index

    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.nextNode;

      if (temp === null) return 'There is no item for this index';
    }

    return temp;
  }

  pop() {
    // removes the last element from the list

    if (this.head === null) return;

    let curr = this.head;
    let prev = null;

    while (curr.nextNode !== null) {
      prev = curr;
      curr = curr.nextNode;
    }

    prev.nextNode = curr.nextNode;
  }

  contains(value) {
    // returns true if the passed in value is in the list and otherwise returns false

    let temp = this.head;

    while (temp !== null) {
      if (temp.value === value) return true;

      temp = temp.nextNode;
    }

    return false;
  }

  find(value) {
    // returns the index of the node containing value, or null if not found.

    let temp = this.head;
    let index = 0;

    while (temp !== null) {
      if (temp.value === value) return index;

      temp = temp.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null

    let string = '';
    let temp = this.head;

    while (temp !== null) {
      string = string.concat(`(${temp.value}) -> `);
      temp = temp.nextNode;
    }

    return string.concat('-> null');
  }

  insertAt(value, index) {
    // that inserts a new node with the provided value at the given index

    let curr = this.head;

    for (let i = 0; i < index; i++) {
      if (!curr.nextNode) break;

      curr = curr.nextNode;
    }

    let newNode = new Node(value, curr.nextNode || null);
    curr.nextNode = newNode;
  }

  removeAt(index) {
    // that removes the node at the given index.

    let curr = this.head;
    let prev;

    for (let i = 0; i < index; i++) {
      prev = curr;
      curr = curr.nextNode;

      if (!curr) return 'There is no item at this index';
    }

    prev.nextNode = curr.nextNode;
  }
}
