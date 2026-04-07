/* Implement the Chunky Monkey Algorithm.
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

Write a function named chunkArrayInGroups that takes an array as first argument and a number as second argument. 
The function should split the array into smaller arrays of length equal to the second argument and returns them 
as a two-dimensional array. */

function chunkArrayInGroups(arr,num){
  let res=[];
  for(let i=0;i<arr.length/num;i++){
    let sl=arr.slice(i*num,(i+1)*num);
    res.push(sl);
  }
  return res;
}
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
chunkArrayInGroups(["a", "b", "c", "d"], 2)
