/**
 * Array Common patterns
 *
 * 1a. Two Sum (Two Pointers)
 * 2a. Max Sum Subarray Size K (Sliding Window)
 * 2b. Longest Substring Without Repeating Characters
 * 3a. Max Contiguous Subarray Sum (Kadane's Algo)
 * 4a. Binary search
 * 5a. Subarray Sum Equals K (Prefix sums)
 * 5b. Range Sum Query - Immutable (Prefix sums)
 * 6a. Combindation Sums (Backtracking)
 * 6b. Permutations (Backtracking)
 * 7a. House Robber (Dynamic Programming on Arrays)
 * 8a. Next Greater Element (Monotonic Stack)
 * 9a. Dutch national flag algo
 * 10a. Merge Intervals (Sorting and Greedy)
 * 10b. Find Interval Overlaps (Greedy)
 * 10c. Meeting Rooms (Greedy)
 */

// 1a. Two Pointers
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

// 2a. Max Sum Subarray Size K (Sliding Window)
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

// 2b. Longest Substring Without Repeating Characters (Sliding Window & Two Pointers)
// Pattern: Use a window that slides over the array to keep track of a subset of elements
// Problem: Find the length of the longest substring without repeating characters
function lengthOfLongestSubstring(s) {
  let max = 0, windowStart = 0, charIndexMap = new Map();

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const char = s[windowEnd];
    if (charIndexMap.has(char)) {
      windowStart = Math.max(windowStart, charIndexMap.get(char) + 1);
    }
    charIndexMap.set(char, windowEnd);
    max = Math.max(max, windowEnd - windowStart + 1);
  }
  return max;
}

// 3a. Kadane's Algo
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

// 4a. Binary Search
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

// 5a. Subarray Sum Equals K (Prefix sums)
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

// 5b. Range Sum Query - Immutable (Prefix sums)
// Pattern: Use cumulative sums to simplify calculations of subarray sums
// Problem: Find the sum of elements between indices i and j

// 6a. Combindation Sums (Backtracking)
// Pattern: Use backtracking to explore all possible solutions
// Problem: Find all combindations that sum up to a target

// 6b. Permutations (Backtracking)
// Pattern: Use backtracking to explore all possible solutions
// Problem: Generate all possible permutations of the array

// 7a. House Robber (Dynamic Programming on Arrays)
// Pattern: Use DP to solve problems by breaking them into smaller subproblems
// Problem: Maximize the sum of non-adjacent numbers

// 8a. Next Greater Element (Monotonic Stack)
// Pattern: Use a stack to maintain a sequence in a mnotonic order
// Problem: Find the next greater element for each element in the array

// 9a. Dutch national flag algo
// Pattern: Partition an array into three parts based on a pivot
// Problem: Sort an array of 0s, 1s, and 2s
function sortColors(num) {

}

// 10a. Merge Intervals (Sorting and Greedy)
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

// 10b. Find Interval Overlaps (Greedy)
// Pattern: Manipulate intervals to find overlaps, merges, or gaps
// Problem: Find overlapping intervals
function isIntervalOverlap(intervalOne, intervalTwo) {
  return Math.max(intervalOne.start, intervalTwo.start) < Math.min(intervalOne.end, intervalTwo.end);
}

// 10c. Meeting Rooms (Greedy)
// Pattern: Sort the array then apply a greedy approach to solve problem
// Problem: Determine if a person could attend all meetings
function meetingRooms(meetings, person) {

}

const res1a = twoSum([0, 1, 2, 3, 4, 5, 6, 7, 8], 7);
console.log("1a ", res1a[0] === 0 && res1a[1] === 7 ? "Pass" : "Fail");

const res2a = maxSubArraySum([1, 10, 2, 20, 3, 4, 5], 3);
console.log("2a ", res2a === 32 ? "Pass" : "Fail");

const res2b = lengthOfLongestSubstring('abcdeee');
console.log('2b ', res2b === 5 ? 'Pass' : 'Fail');

const res3a = maxSubArray([-2, -3, 4, -1, -2, 1, 5, -3]);
console.log('3a ', res3a === 7 ? 'Pass' : 'Fail');

const res4a = binarySearch([0, 1, 2, 3, 4, 5], 3);
console.log("4a ", res4a === 3 ? "Pass" : "Fail");

const res5a = subArraySum([1, 2, 3, 0, 5], 3);
console.log("5a ", res5a === 3 ? "Pass" : "Fail");

const res10a = mergeIntervals([[1,3],[2,6],[8,10],[15,18]]);
console.log('12a ', res10a[0][0] === 1 && res10a[0][1] === 6 && res10a[1][0] === 8 && res10a[1][1] === 10 && res10a[2][0] === 15 && res10a[2][1] === 18 ? 'Pass' : 'Fail');

const res10b = isIntervalOverlap({start: 1, end: 5}, {start: 4, end: 10});
console.log('13a ', res10b ? 'Passs' : 'Fail');
