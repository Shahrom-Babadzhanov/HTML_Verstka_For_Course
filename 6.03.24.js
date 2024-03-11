// задание №2
// function isPalindrome(input){
//     input = String(input);
//     input = input.replase(/\s+/g, '').ToLowerCase();

//     for (let i = 0; i < input.length / 2; i++) {
//         if(input[i] != input[input.length - 1 - 1]){
//             return false
//         }
//     }
//     console.log(input)
//     return true
// }

// дз

function findLongestWord(string) {
    const arrayWords = string.split(" ");
  
    let longestWord = arrayWords[0];
  
    for (const word of arrayWords) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  
  console.log(findLongestWord("What's your favorite anime ?"));