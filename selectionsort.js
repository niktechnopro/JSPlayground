//1.start with idx=0 and compare it with every other element in the array
//2.save the idx of smaller number if found in inner loop
//3.swap elements of arr[i]- outer loop and found 

// O(n^2) - 2 loops iterating over the same collection;
function selectionSort(arr){
  let idxOfMin = 0;//first idx - assumption
  let temp = 0;
  for(let i = 0; i < arr.length; i++){
    idxOfMin = i;//first idx - assumption
    for(let j = i+1; j<arr.length; j++){
      if(arr[idxOfMin] > arr[j]){
        idxOfMin = j;
      }
    }
    //making swap
    if(i !== idxOfMin){
      temp = arr[i];
      arr[i] = arr[idxOfMin];
      arr[idxOfMin] = temp;
    }
  }
  return arr;
}

