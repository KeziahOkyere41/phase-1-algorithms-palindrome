function reverse(word){
  //' eat' => 'tea'
  const reverseWord = word.split("");
  const stringReverseArray = reverseWord.reverse();
  const stringReverse = stringReverseArray.join("");
  return stringReverse;
}

function isPalindrome(word) {
  // Write your algorithm here
   const stringReverse = reverse(word)

   if(word === stringReverse){
    return true;
   }
   else{
    return false
   }
}

/* 
  Add your pseudocode here
  If the word is the same as the reverse word, return true

  reverse input string,

  if the input string is the same as the reversed input
  return true
  else
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
