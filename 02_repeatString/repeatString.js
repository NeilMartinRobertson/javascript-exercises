const repeatString = function (str, num) {
  //We have to repeat the string by the exact number of times the number argument is and no more
  //We need to use a for loop for this
  //after that is done we need to return that value
  //The Strings will all be one string
  // We would need to create an empty string variable to hold the new string
  //Then we would add the entered string onto that and keep going until it reaches the number of times specified

  let newWord = "";
  if (num < 0) {
    return "ERROR";
  }

  for (let i = 0; i < num; i++) {
    newWord += str;
  }
  return newWord;
};

// Do not edit below this line
module.exports = repeatString;
