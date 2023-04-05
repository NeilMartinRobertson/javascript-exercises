/*The Task:
A function that will take two integers
then returns the sum of every number between
AND including them
Example: sumAll(1, 4) returns the sum of 1 + 2 + 3 + 4
1 + 2 = 3
Hold that sum in a value
Use that sum as the base for the next addition
3 + 3 = 6
Hold this sum for the base of the next addition
6 + 4 = 10
return this result
The function needs to parameters
the first number and then the last number
A variable to hold the sum that starts at zero
A loop that goes through each of the number an adds it by the next highest number
IF there is no higher number end the loop
First Iteration: num1 + num 2 = 3
Second Iteration: num1 + num2 = 6
Third Iteration: num1 + num2 = 10

 */

const sumAll = function (num1, num2) {
  let sum = 0;
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  }

  if (num1 > num2) {
    for (let i = num2; i <= num1; i++) {
      sum += i;
    }
  }
  if (num2 > num1) {
    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
