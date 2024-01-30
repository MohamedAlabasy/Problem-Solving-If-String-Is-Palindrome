function isPalindrome1(value: string): boolean {
    // Remove spaces, punctuation, and convert to lowercase
    value = value.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Compare the string with its reverse
    return value === value.split("").reverse().join("");
}

// function isPalindrome2(value: string): boolean {
//     const len = value.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (value[i] !== value[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// function isPalindrome3(value: string): boolean {
//     // Remove spaces, punctuation, and convert to lowercase
//     value = value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

//     // Use two pointers to compare characters
//     let left = 0;
//     let right = value.length - 1;
//     while (left < right) {
//         if (value[left] !== value[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }


const palindrome1: string = 'racecar'
const palindrome2: string = 'hello'
const palindrome3: string = '123321'
const palindrome4: string = '123456'
const palindrome5: string = '123+_**_+321'
const palindrome6: string = 'A man, a plan, a canal, Panama!'

console.log(`is (${palindrome1}) a palindrome : ${isPalindrome1(palindrome1)}`);
console.log(`is (${palindrome2}) a palindrome : ${isPalindrome1(palindrome2)}`);
console.log(`is (${palindrome3}) a palindrome : ${isPalindrome1(palindrome3)}`);
console.log(`is (${palindrome4}) a palindrome : ${isPalindrome1(palindrome4)}`);
console.log(`is (${palindrome5}) a palindrome : ${isPalindrome1(palindrome5)}`);
console.log(`is (${palindrome6}) a palindrome : ${isPalindrome1(palindrome6)}`);
