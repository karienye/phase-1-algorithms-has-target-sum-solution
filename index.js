function hasTargetSum(array, target) {
  // Write your algorithm here
    const firtNumber = {};

    for (const number of array) {
      const complementary = target - number; // getting the complementary number
      if (firtNumber[complementary]) return true; // if first number and complemantary add up to target
      firtNumber[number] = true;
    }
    return false;
  }


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  choose a number in an array that is less than or equal to the target.
  the complementary number will be the target number - the first munber you choose
  so if the complementary number and the first number choosen, when added they give the target
  then return true
  if not return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 8], 20));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 5, 11, 7], 15));

  console.log("");

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
