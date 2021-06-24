//binary search - binary search - where to put index


var searchInsert = function(nums, target) {//nums - an array, target - number
    // Lower and upper bounds
    let start = 0;
    let end = nums.length - 1;
 
    // Traverse the search space
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
 
        // If K is found
        if (nums[mid] == target)
            return mid;
 
        else if (nums[mid] < target)
            start = mid + 1;
 
        else
            end = mid - 1;
    }
 
    // Return insert position
    return end + 1; //returns index to where this target number belongs;
};