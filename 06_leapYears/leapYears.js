//What is a Leap Year
// A Leap Year is divisible by four
//If it is divisible by 100 it is not a leap year
// If it is divisible by 400 it is a leap year
//Since 400 and 100 are divisible by the same number,
//I need a statement that makes it so that it first checks for
//if it is divisible by 100 and if it is make that return false

const leapYears = function (leapYear) {
  return (leapYear % 4 === 0 && leapYear % 100 !== 0) || leapYear % 400 == 0;
};
// Do not edit below this line
module.exports = leapYears;
