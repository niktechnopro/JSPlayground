//practice making Linked List with Nodes

class Node{
  
  constructor(data, next=null){
    this.data = data;
    this.next = next;
  }

  
  getThisNode(){
    return this.node;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  insertFirst(data){
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
        count++;
        node = node.next;
    }
    return count;
  }

  getFirst(){//this.head points to very first node of our linked list
    return this.head;
  }
}

const nodeOne = new Node(5);
// console.log("node: ", nodeOne);
const list = new LinkedList();
console.log("list before insertion: ", list);

//insert element into list
list.insertFirst(5);
console.log("after insertion: ", list);

list.insertFirst(7);
console.log("after insertion: ", list);

list.insertFirst(2);
console.log("after insertion: ", list);


//counting the size
console.log(list.size());

//getFirst - returns node that head is pointing to
console.log(list.getFirst());
