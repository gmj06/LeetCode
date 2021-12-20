/*
LINK
https://leetcode.com/problems/squares-of-a-sorted-array/

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
 

Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

*/



    /**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
// TRIVIAL SOLUTION
var sortedSquares = function(nums) {
    var nums_squares = nums.map(x => x * x);
    
    return nums_squares.sort((x,y) => x-y);
};
*/



var sortedSquares = function(nums) {
    var nums_squares = nums.map(x => x * x);
    return mergesort(nums_squares);
};

var merge = function(leftArr, rightArr){
    var arr = [];
    
    while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            arr.push(leftArr.shift());
        }else{
            arr.push(rightArr.shift());
        }
    }
    
    return [...arr,...leftArr,...rightArr]
}

var mergesort = function(arr) {
    var mid = Math.floor(arr.length/2);
    
    if(arr.length < 2) return arr;
    
    const leftArr =  arr.splice(0, mid);
    return merge(mergesort(leftArr), mergesort(arr));
}
