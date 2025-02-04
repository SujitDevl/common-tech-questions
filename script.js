// ********** Reverse a strinng ***************

 function reverseString(str){
     return str.split('').reverse().join('');
 }

// console.log(reverseString('Sujit'))


function reverseString(str){
    return str.split('').reverse().join('');
}
// console.log(reverseString('Hello'))


// ********* Check for Palindrome ***********

function isPalindrome(word){
    return word.split('').reverse().join('');
}

// console.log(isPalindrome("madam"))
// console.log(isPalindrome("teacher"))


// ************ Find the missing number in an array **********


function findMissingNumber(arr, n){
    const totalSum = (n *(n+1)) / 2;
    const arrSum = arr.reduce((sum, num) => sum + num, 0 );
    return totalSum -arrSum
}

console.log(findMissingNumber([1,2,3,5], 5))