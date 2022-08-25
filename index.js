function hasTargetSum(array, target) {
    for (let i = 0; i < array.length; i++) {
      const complement = target - array[i];
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] === complement) return true;
      }
    }
return false;
 //Make a function "hasTargetSum"that checks if two numbers add up to the "target"interger.Then return true if it meets the condition.
}

/* 
 O
*/

/* 
  Add your pseudocode here
  1.iterate through the array,
2.identintify a compliment for the current number in the array (compliment=target-current number)
3.iterate through the rest of the array
4.check if any number is our compliment then returns true if so and false if otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
