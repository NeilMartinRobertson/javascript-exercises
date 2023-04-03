const reverseString = function (str) {
  /*Reversing a String with Built In Methods 
  
    const newWord = str.split("");
  const reversedWord = newWord.reverse();
  const test = reversedWord.join("");
*/

  // Using a For Loop

  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;

  l;
};

// Do not edit below this line
module.exports = reverseString;
