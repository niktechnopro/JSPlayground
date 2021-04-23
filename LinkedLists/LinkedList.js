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
    console.log("this.head", this.head);
    let node = this.head;
    while (node) {
        count++;
        node = node.next
        console.log("node: ", node)
    }
    return count;
  }
}

const nodeOne = new Node(5);
const list = new LinkedList();


console.log(nodeOne);
list.head = nodeOne;
console.log(list);
list.insertFirst(7);
list.insertFirst(2);
console.log(list);
console.log(list.size());
