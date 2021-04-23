//implementing class Stack.js

class Stack{

	constructor(){
		this.stack = [];
	}


	//stack methods;
	peek(){//return top element - do not remove it
		if(this.stack.length > 0){
			return this.stack[this.stack.length-1];
		}
		return null;
	}

	//returns true if nothing is on the top of the stack. else false
	empty(){
		if(this.stack.length === 0){
			return true;
		}
		return false;
	}

	pop(){//removes and returns top element
		if(this.stack.length > 0){
			return this.stack.pop();
		}
	}

	push(element){//pushes an element on the top of the stack
		this.stack.push(element);
	}

}

