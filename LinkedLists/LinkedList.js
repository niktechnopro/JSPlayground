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

  getLast(){//this should return the last node
    if(this.head){//if not null - we have a Node
      let node = this.head;
      while (node && node.next) {
          node = node.next;
      }
      return node;
    }
    return null;
  }

  clear(){//the head does not point to first node;
    this.head = null;
  }

  removeFirst(){//removes and returns the first node;
    if(this.head){
      let node = this.head;
      this.head = node.next;
      node.next = null;
      return node;
    }
    else{//the case if head points to null - empty
      return;
    }
  }

  removeLast(){//removes the last node
    let lastNode;
    if(!this.head){//checks if the list is not empty
      return;
    }

    //this next step is really not necesseary
    if(!this.head.next){//check if there is only one Node
      let onlyNode = this.head;
      this.head = null;
      return onlyNode;
    }

    let node = this.head.next;
    while(node.next){
      node = node.next;
      // console.log("node: ", node);
    }
    lastNode = node;//node to return
    node = this.head.next;
    while(node.next){
      if(node.next.data !== lastNode.data){
        node = node.next;
      }
      else{
        node.next = null;
      }
    }
    // console.log("here", node);
    return lastNode;
  }

  insertLast(data){
    //make a new node
    let newNode = new Node(data);

    //one way
    if(!this.head){
      this.head = newNode;
      return this.head;
    }

    let node = this.head;
    while(node.next){
      //update the current node
      node = node.next;
    }
    //that should be the last node - then we have to set .next pointer to newNode
    node.next = newNode;
    return newNode;


    //or we could also reuse - getLast();
    // let last = getLast();
    // if(last){
    //   last.next = newNode;
    // }
    // else{
    //   this.head = newNode;
    // }
  }

  getAt(idx){
    if(!this.head) return;

    let counter = 0;
    let node = this.head;
    while(node.next && counter < idx){
      node = node.next;
      counter++;
    }
    if(idx > counter){
      return "index is out of bounds";
    }
    return node;
  }

  removeAt(idx){
    console.log("before remove idx: ", idx, " list: ", list);
    //remove node we are trying to remove
    //edge cases
    if(this.head === null) return;//the list is empty
    //another way
    if(!this.head) return;


    if(idx === 0){//if idx=0 - just remove 1st node
      // this.removeFirst();
      // return list;
      
      //another way
      this.head = this.head.next;
      return list;
    }
    
    let nodeCount = 0;
    let currentNode = this.head; //we start with 1st node
    let prevNode = null;

    while(currentNode.next){
      prevNode = currentNode;
      nodeCount += 1;
      currentNode = currentNode.next;
      if(nodeCount === idx){
        prevNode.next = currentNode.next;
        break;
      }
    }
    return list;
  }
}

const nodeOne = new Node(5);
// console.log("node: ", nodeOne);
const list = new LinkedList();
console.log("list before insertion: ", list);

//insert element into list
list.insertFirst(5);
// console.log("after insertion: ", list);

list.insertFirst(7);
// console.log("after insertion: ", list);

list.insertFirst(2);
// console.log("after insertion: ", list);


//counting the size
// console.log(list.size());

// //getFirst - returns node that head is pointing to
// console.log("first node: ", list.getFirst());

// //getLast - should return the last node
// console.log("last node: ", list.getLast());

// // list.clear();//to empty the list
// console.log("clear? ", list.size());

// //removeFirst
// console.log("first node", list.removeFirst());
// console.log(list);

// list.removeLast();
// console.log("after removal last: ", list);

// //insertLast 
// list.insertLast(21);
// console.log("list: ", list);

//removeAt
console.log("list before removal: ", list);
list.removeAt(2);

