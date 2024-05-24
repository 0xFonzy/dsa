/**
 * Array Common patterns
 *
 * 1. Two Sum (Two Pointers)
 * 2. Max Subarray Sum (Sliding window)
 * 3. Max Contiguous Subarray Sum (Kadane's Algo)
 * 4. Binary search
 * 5. Subarray Sum Equals K (Prefix sums)
 * 6. Combindation Sums (Backtracking)
 * 7. Permutations (Backtracking)
 * 8. House Robber (Dynamic Programming on Arrays)
 * 9. Next Greater Element (Monotonic Stack)
 * 10. Dutch national flag algo
 * 11. Merge Intervals (Sorting and Greedy)
 * 12. Find Interval Overlaps
 * 13. Meeting Rooms
 */

// 1. Two Pointers
// Pattern: Use two pointers to iterate from the beginning and end of the array towards the center
// Problem: find the indices of two numbers that sum to target in sorted array
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
// Pattern: Use a window (sub-array) of fixed size to slide over the array
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
// Pattern: Used to find the maximum sum subarray in linear time
// Problem: Find the maximum sum of a contiguous subarray
function maxSubArray(nums) {
  let max = nums[0], curr = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(nums[i], nums[i] + curr);
    max = Math.max(max, curr);
  }
  return max;
}

// 4. Binary Search
// Pattern: Efficiently find elements or conditions in a sorted array
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
// Pattern:  Use cumulative sums to simplify calculations of subarray sums
// Problem: Find the number of subarrays with a sum equal to k.
function subArraySum(nums, k) {
  let prefix = {0:1}, count = 0, sum = 0;

  for (const num of nums) {
    sum += num;
    if (prefix[sum-k]) count += prefix[sum-k];
    prefix[sum] = (prefix[sum] || 0) + 1;
  }
  return count;
}

// 6. Combindation Sums (Backtracking)
// Pattern: Use backtracking to explore all possible solutions
// Problem: Find all combindations that sum up to a target

// 7. Permutations (Backtracking)
// Pattern: Use backtracking to explore all possible solutions
// Problem: Generate all possible permutations of the array

// 8. House Robber (Dynamic Programming on Arrays)
// Pattern: Use DP to solve problems by breaking them into smaller subproblems
// Problem: Maximize the sum of non-adjacent numbers

// 9. Next Greater Element (Monotonic Stack)
// Pattern: Use a stack to maintain a sequence in a mnotonic order
// Problem: Find the next greater element for each element in the array

// 10. Dutch national flag algo
// Pattern: Partition an array into three parts based on a pivot
// Problem: Sort an array of 0s, 1s, and 2s
function sortColors(num) {

}

// 11. Merge Intervals (Sorting and Greedy)
// Pattern: Manipulate intervals to find overlaps, merges, or gaps
// Problem: Merge overlapping intervals
function mergeIntervals(intervals) {
  if (!intervals.length) return [];
  intervals.sort((a,b) => a[0] - b[0]);
  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const prev = result[result.length-1];
    const curr = intervals[i];

    // compare prev y to curr x
    if (prev[1] >= curr[0]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      result.push(curr);
    }
  }
  return result;
}

// 12. Find Interval Overlaps
// Pattern: Manipulate intervals to find overlaps, merges, or gaps
// Problem: Find overlapping intervals
function isIntervalOverlap(intervalOne, intervalTwo) {
  return Math.max(intervalOne.start, intervalTwo.start) < Math.min(intervalOne.end, intervalTwo.end);
}

// 13. Meeting Rooms
// Pattern: Sort the array then apply a greedy approach to solve problem
// Problem: Determine if a person could attend all meetings
function meetingRooms(meetings, person) {

}

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

const r11 = mergeIntervals([[1,3],[2,6],[8,10],[15,18]]);
console.log('Merge intervals ', r11[0][0] === 1 && r11[0][1] === 6 && r11[1][0] === 8 && r11[1][1] === 10 && r11[2][0] === 15 && r11[2][1] === 18 ? 'Pass' : 'Fail');

const r12 = isIntervalOverlap({start: 1, end: 5}, {start: 4, end: 10});
console.log('Find interval overlap ', r12 ? 'Passs' : 'Fail');
