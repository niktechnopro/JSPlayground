let test_array = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];
// let test_array = [2,4,1,6,8,5,3,7];//unsorted

console.log(quickSort(test_array));

function quickSort(array){
	return qsort(array, 0, array.length-1); //(array, left, right)
}

function qsort(array, left, right){
	if (left > right){
		return;
	}
	//partioning array - returning the deviding index 
	let index = partition(array, left, right);
	qsort(array, left, index-1);//before pivot
	qsort(array, index+1, right);//after pivot
  return array;
}

//implementing partition - Lomuto partition function
function partition(array, low, high){
  //picking the pivot - might be last, first or any random number
  // the present algorith will use last number in array as pivot
  let pivot = array[high];
	//at the end of this while loop the lesser elements will be on the left of pivot point and greater - on the right of pivot point;
  let i = low - 1;

	for(let j = low; j < high; j++){
    if(array[j] < pivot){
      i++;
      //swap array[i] and array[j]
      array = swap(array, i, j);
      // let temp = array[i];
      // array[i] = array[j];
      // array[j] = temp 
    }
  }

  //swap array[i+1] and array[j]
  array = swap(array, i+1, high);
  // let temp = array[i+1];
  // array[i+1] = array[high];
  // array[high] = temp;

  return i+1; 
}

function swap(array, low, high){
  let temp = array[low];
  array[low] = array[high];
  array[high] = temp;
  return array;
}

