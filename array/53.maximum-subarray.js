/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Medium (49.86%)
 * Likes:    24390
 * Dislikes: 1140
 * Total Accepted:    2.7M
 * Total Submissions: 5.3M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 *
 * A subarray is a contiguous part of an array.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1]
 * Output: 1
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 *
 *
 *
 * Follow up: If you have figured out the O(n) solution, try coding another
 * solution using the divide and conquer approach, which is more subtle.
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  //   let currSum = nums[0];
  //   let overAllSum = nums[0];

  //   if (nums.length === 1) {
  //     return nums[0];
  //   }

  //   for (let i = 1; i <= nums.length; i++) {
  //     if (currSum > 0) {
  //       currSum = currSum + nums[i];
  //     } else {
  //       currSum = nums[i];
  //     }

  //     if (currSum > overAllSum) {
  //       overAllSum = currSum;
  //     }
  //   }

  //   return overAllSum;

  let previousSum = 0;
  let maxSum = -Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    previousSum = Math.max(previousSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, previousSum);
  }

  return maxSum;
};
// @lc code=end
