class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // add(item)
  add(item) {
    const node = new Node(item);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  //insertAt(item, index)
  insertAt(item, index) {
    if (index < 0 || index > this.size) {
      return console.log("Please enter a valid index.");
    }

    const node = new Node(item);
    let current = this.head;
    let previous;

    if (index === 0) {
      node.next = current;
      this.head = node;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }

      node.next = current;
      previous.next = node;
    }

    this.size++;
  }

  // removeFrom(index)
  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return console.log("Please enter a valid index.");
    }

    let current = this.head;
    let previous;

    if (index === 0) {
      this.head = current.next;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
    return current.item;
  }

  // removeElement(item)
  removeElement(item) {
    let current = this.head;
    let previous = null;

    while (current != null) {
      if (current.item === item) {
        if (previous == null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }

        this.size--;
        return current.item;
      }

      previous = current;
      current = current.next;
    }

    return -1;
  }

  // indexOf(item)
  indexOf(item) {
    let count = 0;
    let current = this.head;

    while (current != null) {
      if (current.item === item) {
        return count;
      }

      count++;
      current = current.next;
    }

    return -1;
  }

  // isEmpty()
  isEmpty() {
    return this.size === 0;
  }

  // size_Of_List()
  size_Of_List() {
    console.log(this.size);
  }

  // PrintList()
  printList() {
    let current = this.head;
    let str = "";

    while (current) {
      str += current.item + " ";
      current = current.next;
    }

    console.log(str);
  }

  // reverseList()
  reverseList() {
    let current = this.head;
    let previous = null;
    let next = null;

    while (current != null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
    return this.head;
  }

  // removeDuplicates()
  removeDuplicates() {
    let current = this.head;
    let previous = null;
    let duplicates = {};

    while (current != null) {
      if (duplicates[current.item]) {
        previous.next = current.next;
        this.size--;
      } else {
        duplicates[current.item] = true;
        previous = current;
      }

      current = current.next;
    }
  }
}
