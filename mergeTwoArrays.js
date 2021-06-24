let l1 = [1,2,4], l2 = [1,3,4];

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// O(n) time & O(n) space
function mergeTwo(l1, l2) {
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;

  while (current < (l1.length + l2.length)) {

    let isArr1Depleted = index1 >= l1.length;
    let isArr2Depleted = index2 >= l2.length;

    if (!isArr1Depleted && (isArr2Depleted || (l1[index1] < l2[index2]))) {
      merged[current] = l1[index1];
      index1++;
    } else {
      merged[current] = l2[index2];
      index2++;
    }

    current++;
  }

  return merged;
}

mergeTwo([], [0]);