//Write the function golf_score_calculator which accepts two strings and calculates the golf score of a game. Both strings //will be of length 18, and each character in the string will be a number between 1 and 9 inclusive.
//Each digit in the first string will represent the par score of the hole corresponding to the sum of its index and 1. Each //digit in the second string represents my actual score on that same hole.


function golfScoreCalculator(parList, scoreList){
// parlist
  let par = 0
  for (let i = 0; i < parList.length; i++) {
    par += scoreList[i] - parList[i]
  }
  return par 
}
