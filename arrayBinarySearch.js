//binary search of index in already sorted array
let test_array = [1,2,3,4,5,6,7,8];

function binaryIndexOf(array, searchElement) {
    console.log('time: ', new Date().getTime()); //time in ms - unix time
    var minIndex = 0;
    var maxIndex = array.length - 1;
    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;//the number is not in the provided array
}


console.log(binaryIndexOf(test_array, 8));