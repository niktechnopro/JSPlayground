//Bubble sort algorithm is an algorithm that sorts the array by comparing two adjacent elements and swaps them if they are not in the intended order. 
//Here order can be anything like increasing order or decreasing order.


// let test_array = [4,1,3,7,9,21];//needs to be sorted

//bubble sort
// let test_array = [4,1,3,7,9,36,21];//needs to be sorted
let test_array = [100, -40, 500, -124, 0, 21, 7];
// console.log(test_array.sort((a,b)=>a-b));//if negative - keep, positive - swap;

test_array.sort((a, b)=>{//sort implementation
  if(a>b) return 1;
  if(a<b) return -1
});

//best case for bubble sort O(n), worst - O(n^2); - runtime complexity

console.log("sorted: ", test_array)
function bubbleSort(arr){//implementation one
  let temp_arr=[];
  for(let i = 0; i < arr.length; i++){
    // console.log(arr[i])
    if(arr[i+1] && arr[i] < arr[i+1]){
      temp_arr.push(arr[i]);
    }
    else if(arr[i+1] && arr[i] > arr[i+1]){
      temp_arr.push(arr[i+1]);
      temp_arr.push(arr[i]);
    }
    else{//the last item
      temp_arr.push(arr[i]);
    }
  }
  console.log(temp_arr);
  return temp_arr;
}


function bblSort(arr){//implementation 2
	
  	for(var i = 0; i < arr.length; i++){
  		// Last i elements are already in place
  		for(var j = 0; j < ( arr.length - i -1 ); j++){
			// Checking if the item at present iteration
			// is greater than the next iteration
			if(arr[j] > arr[j+1]){
        
				// If the condition is true then swap them
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j+1] = temp;
      		}
    	}
  	}
	// Print the sorted array
	console.log(arr);
	return arr;
}