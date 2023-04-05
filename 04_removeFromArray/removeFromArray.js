/*Task:
Implement a function that takes an array,
and some other arguments then removes the other arguments
from the array
The first parameter will be the array 
The second parameter will be the rest parameter
The rest parameter will be the item that we will be removing
We want to include all the items that is NOT in the rest parameter
For example, if the rest parameter has 3 in it and the base array has a 3 in it, that 3 will not be included
We will need to include a new array to hold the new values in it
Then we will need to use a loop that goes through each item and IF
it is not in the rest parameter add it to the new array, if it is in the rest parameter, do not add it to the new array
After that we want to return the array

*/

const removeFromArray = function (arr, ...itemToRemove) {
  //Using forEach
  // const newArr = [];
  // arr.forEach((element) => {
  //   if (!itemToRemove.includes(element)) {
  //     newArr.push(element);
  //   }
  // });

  //Using the Filter Method

  // const newArr = arr.filter((element) => !itemToRemove.includes(element));

  const newArr = [];
  for (let i = arr.length; i < arr.length; i++) {
    console.log(i);
  }
  return newArr;
};
// removeFromArray(arr, 3)
// Do not edit below this line
module.exports = removeFromArray;
