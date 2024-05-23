/**
 * Array Common patterns
 *
 * 1. Two pointers
 * 2. Sliding window
 * 3. Binary search
 * 4. Prefix sums
 * 5. Sorting and Greedy Algos
 * 6. Backtracking
 * 7. Dynamic Programming on Arrays
 * 8. Monotonic Stack
 * 9. Kadane's Algo
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

// 3. Binary Search
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

// 4. Prefix Sums
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

// 5. Sorting and Greedy Algos
// Problem:

// 6. Backtracking
// Problem:

// 7. Dynamic Programming on Arrays
// Problem:

// 8. Monotonic Stack
// Problem:

// 9. Kadane's Algo
// Problem:

// 10. Dutch national flag algo
// Problem:

// 11. Merge Intervals
// Problem:

const r1 = twoSum([0, 1, 2, 3, 4, 5, 6, 7, 8], 7);
console.log("Two sums", r1[0] === 0 && r1[1] === 7 ? "Pass" : "Fail");
const r2 = maxSubArraySum([1, 10, 2, 20, 3, 4, 5], 3);
console.log("Max sum subarray ", r2 === 32 ? "Pass" : "Fail");
const r3 = binarySearch([0, 1, 2, 3, 4, 5], 3);
console.log("Binary search ", r3 === 3 ? "Pass" : "Fail");
const r4 = subArraySum([1, 2, 3, 0, 5], 3);
console.log("Subarray Sum ", r4 === 3 ? "Pass" : "Fail");
