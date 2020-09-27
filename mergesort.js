// let test_array = [2,4,1,6,8,5,3,7];//unsorted

let test_array = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];
//create merge function - merging already sorted arrays
function merge(l, r){//where l,r left and right halves
  let sorted = [];
  //number of elements
  let lN = l.length;
  let rN = r.length;
  let i = 0, j = 0, k = 0; //simply initialization
  while(i < lN && j < rN){
    if(l[i] <= r[j]){
      sorted[k] = l[i];
      i++;
    }
    else{//case for l[i] > r[j]
      sorted[k] = r[j];
      j++;
    }
    k++;
  }

  //copy remaining elements of left subarray, if any
  while(i < lN){
    sorted[k] = l[i];
    i++;
    k++;
  }

  //copy remaining elements of right subarray, if any
  while(j < rN){
    sorted[k] = r[j];
    j++;
    k++;
  } 
  return sorted;
}

function mergeSort(arr){
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2),
      left = mergeSort(arr.slice(0, mid)),
      right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort(test_array));

