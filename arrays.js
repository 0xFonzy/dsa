/**
 * Array Common patterns
 *
 * 1. Two pointers
 * 2. Sliding window
 * 3. Kadane's Algo
 * 4. Binary search
 * 5. Prefix sums
 * 6. Sorting and Greedy Algos
 * 7. Backtracking
 * 8. Dynamic Programming on Arrays
 * 9. Monotonic Stack
 * 10. Dutch national flag algo
 * 11. Merge Intervals
 */

// 1. Two Pointers
// Problem: find the indices of two numbers that add up to a specific target (sorted array input)
function twoSum(nums, target) {
  let left = 0, right = nums.length-1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }

  return [];
}

// 2. Sliding Window
// Problem: find max sum of subarray of size k
function maxSubArraySum(nums, k) {
  let max = 0, maxWindow = 0;

  for (let i = 0; i < k; i++) {
    maxWindow += nums[i]; 
  }
  max = maxWindow;

  // slide window
  for (let i = k; i < nums.length; i++) {
    maxWindow += nums[i] - nums[i-k];
    max = Math.max(max, maxWindow);
  }

  return max;
}

// 3. Kadane's Algo
// Problem: Find the maximum sum of a contiguous subarray
function maxSubArray(nums) {
  let max = nums[0], curr = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(nums[i], curr + nums[i]);
    max = Math.max(max, curr);
  }
  return max;
}

// 4. Binary Search
// Problem: find the first position of a target value in a sorted array
function binarySearch(nums, target) {
  let left = 0, right = nums.length-1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// 5. Prefix Sums
// Problem: Find the number of subarrays with a sum equal to a given k.
function subArraySum(nums, k) {
  let prefix = {0:1}, count = 0, sum = 0;

  for (const num of nums) {
    sum += num;
    if (prefix[sum-k]) count += prefix[sum-k];
    prefix[sum] = (prefix[sum] || 0) + 1;
  }
  return count;
}

// 6. Sorting and Greedy Algos
// Problem:

// 7. Backtracking
// Problem:

// 8. Dynamic Programming on Arrays
// Problem:

// 9. Monotonic Stack
// Problem:

// 10. Dutch national flag algo
// Problem:

// 11. Merge Intervals
// Problem:

const r1 = twoSum([0, 1, 2, 3, 4, 5, 6, 7, 8], 7);
console.log("Two sums", r1[0] === 0 && r1[1] === 7 ? "Pass" : "Fail");
const r2 = maxSubArraySum([1, 10, 2, 20, 3, 4, 5], 3);
console.log("Max sum subarray k ", r2 === 32 ? "Pass" : "Fail");
const r3 = maxSubArray([-2, -3, 4, -1, -2, 1, 5, -3]);
console.log('Max sum subarray ', r3 === 7 ? 'Pass' : 'Fail');
const r4 = binarySearch([0, 1, 2, 3, 4, 5], 3);
console.log("Binary search ", r4 === 3 ? "Pass" : "Fail");
const r5 = subArraySum([1, 2, 3, 0, 5], 3);
console.log("Subarray Sum ", r5 === 3 ? "Pass" : "Fail");
