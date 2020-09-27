//quickselect
//quickselect algorithm
let test_array = [2,4,1,6,8,5,3,7];//unsorted

function partition(array, low, high){
	let pivot = array[high], pivotlocation = low, temp;

	//inserting elements of less value to the left of pivot location
	for (let i = low; i < high; i++){
		if(array[i] < pivot){
			temp = array[i];
			array[i] = array[pivotlocation];
			array[pivotlocation] = temp;
			pivotlocation++;
		}
	}

	temp = array[high];
	array[high] = array[pivotlocation];
	array[pivotlocation] = temp;

	return pivotlocation;
}

//assuming array has all the distinct elements, kth - smallest element in the array
function quickselect(arr, k) {  
  var pivotDist;   
  var left = 0, right = arr.length - 1;       
  while(right !== left) {
    // Maintaining: left <= k <= right, while enclosing left to right 
    pivotDist = partition(arr, left, right)        
    
    if (k < pivotDist) {
      right = pivotDist - 1;
    } else {
      //item at pivotDist may be the answer as well.
      left = pivotDist;
    }
  }    

  // left == right, and we maintained 'left <= k <= right', so we have an answer
  return arr[k];
}

//choose the position of desired element in sorted array
let k = 2;


console.log(quickselect(test_array, k));//answer
