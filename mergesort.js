//this is divide and conquer algorithm
let test_array = [2,4,1,6,8,5,3,7];//unsorted

console.log(test_array)
//split given array into 2 halves
let halving = test_array.length/2;
let left = test_array.slice(0, halving);
let right = test_array.slice(halving);
console.log(left, right);

//create merge function - merging already sorted arrays
function merge(l, r, array){
  //number of elements
  let lN = l.length;
  let rN = r.length;
  let i = 0, j = 0, k = 0; //simply initialization
  while(i < lN && j < rN){
    if(l[i] <= r[j]){
      console.log("here", l[i])
      array[k] = l[i];
      i++;
    }
    else{//case for l[i] > r[j]
      console.log("there")
      array[k] = r[j];
      j++;
    }
    k++;
    console.log(array);
  }

  //copy remaining elements of left subarray, if any
  while(i < lN){
    array[k] = l[i];
    i++;
    k++;
  }

  //copy remaining elements of right subarray, if any
  while(j < rN){
    array[k] = r[j];
    j++;
    k++;
  } 
  return array;
}

merge(left, right, test_array);