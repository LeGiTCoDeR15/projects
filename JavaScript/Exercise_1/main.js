// Define the string to reverse
const originalString = "Rajnish Puri";

// Define a function that takes a string parameter
function reverseString(str) {
  // Convert the string to an array, reverse the array, then join it back into a string
  str = str.split("");
  str = str.reverse();
  const reversedString = str.join("");
  // Return the reversed string
  return reversedString;
}

// Call the function with the original string and output the result to the console
console.log(reverseString(originalString));


// In this program, we define a variable originalString that contains the string to be reversed, which is "CodeHelp".
// Next, we define a function named reverseString that takes a string parameter str.
// Inside the function, the split() method is used to convert the string into an array of characters. The reverse() method is then called on the array to reverse the order of the elements. Finally, the join() method is used to join the array back into a string.
// The reversed string is then returned from the function.
// To use the function, we call it with the originalString variable as the argument, and output the result to the console using console.log(). This will display "CodeHelp" in reverse order, which is "pleHedoC".

// function to count the number of vowels in a string
function countVowels(str) {
  // define an array of vowels
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  // loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // check if the character is a vowel
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  // return the number of vowels
  return count;
}

// test cases
console.log(countVowels("CodeHelp")); // output: 3
console.log(countVowels("hello")); // output: 2
console.log(countVowels("world")); // output: 1
console.log(countVowels("aeiou")); // output: 5
console.log(countVowels("JavaScript")); // output: 3
console.log(countVowels("Pranay")); // output: 2


function findCommonElements(arr1, arr2) {
  // Create an empty array to hold the common elements
  let commonElements = [];

  // Loop through each element in arr1
  for (let i = 0; i < arr1.length; i++) {
    // Check if the current element is in arr2
    if (arr2.includes(arr1[i])) {
      // If the element is in arr2 and not already in commonElements array, add it
      if (!commonElements.includes(arr1[i])) {
        commonElements.push(arr1[i]);
      }
    }
  }

  // Sort the commonElements array in ascending order
  commonElements.sort((a, b) => a - b);

  // Return the commonElements array
  return commonElements;
}

// Example usage
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const commonElements = findCommonElements(arr1, arr2);
console.log(commonElements); // Outputs: [3, 4, 5]