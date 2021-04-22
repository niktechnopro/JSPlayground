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
}

const nodeOne = new Node(5);
const list = new LinkedList();


console.log(nodeOne);
list.head = nodeOne;
console.log(list);
list.insertFirst(7);
console.log(list);

