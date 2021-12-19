/*
LINK
https://leetcode.com/problems/search-insert-position/

    Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

    You must write an algorithm with O(log n) runtime complexity.

    

    Example 1:

    Input: nums = [1,3,5,6], target = 5
    Output: 2
    Example 2:

    Input: nums = [1,3,5,6], target = 2
    Output: 1
    Example 3:

    Input: nums = [1,3,5,6], target = 7
    Output: 4
    

    Constraints:

    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums contains distinct values sorted in ascending order.
    -104 <= target <= 104

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    return searchInsertRecursion(nums, target, 0, nums.length - 1)
};

var searchInsertRecursion = function(nums, target, first_index, last_index){
    if(first_index > last_index) return last_index + 1
    
    var mid_index = first_index + Math.floor((last_index - first_index)/2);
    
    if(nums[mid_index] === target) return mid_index;
    else if(nums[mid_index] > target) return searchInsertRecursion(nums, target, first_index, mid_index - 1);
    else return searchInsertRecursion(nums, target, mid_index + 1, last_index);
}