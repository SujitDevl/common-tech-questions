// ********** Reverse a strinng ***************

function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString('Sujit'))

function reverseString(str) {
  return str.split("").reverse().join("");
}
// console.log(reverseString('Hello'))

// ********* Check for Palindrome ***********

function isPalindrome(word) {
  return word.split("").reverse().join("");
}

// console.log(isPalindrome("madam"))
// console.log(isPalindrome("teacher"))

// ************ Find the missing number in an array **********

function findMissingNumber(arr, n) {
  const totalSum = (n * (n + 1)) / 2;
  const arrSum = arr.reduce((sum, num) => sum + num, 0);
  return totalSum - arrSum;
}

// console.log(findMissingNumber([1,2,3,5], 5))

// *******Find the largest and Smallest number in an array***

function largeandSmall(arr) {
  var largest = Math.max(...arr);
  var smallest = Math.min(...arr);
  return { largest, smallest };
}

// console.log(largeandSmall([1,3,45,6,61,0]))

// ******* Two Sum Number ************

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// console.log(twoSum([2, 7, 10, 12], 9))

// *********** Find duplicate number in an arrya **************

function findduplicate(nums) {
  let notebook = {};

  for (let num of nums) {
    if (notebook[num]) {
      return num;
    }
    notebook[num] = true;
  }

  return -1;
}

// console.log(findduplicate([1,2,5,4,5]))

// ************ Merge two sorted array ************

function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Append thegit remaining elements from arr1 or arr2

  while (i < arr1.length) mergedArray.push(arr1[i++]);
  while (j < arr2.length) mergedArray.push(arr2[j++]);

  return mergedArray;
}

// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
