/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m + n - 1;
  let first = m - 1;
  let second = n - 1;

  while (second >= 0) {
    let fVal = nums1[first];
    let sVal = nums2[second];
    if (fVal > sVal) {
      nums1[i] = fVal;
      first--;
      i--;
    } else {
      nums1[i] = sVal;
      second--;
      i--;
    }
  }
};
// @lc code=end
