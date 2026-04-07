/* Design a Sum All Numbers Algorithm

In this lab, you will need to design a sum all numbers algorithm.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named sumAll that accepts an array of two numbers.
sumAll([n, m]) should return the sum of n and m plus the sum of all the numbers between them.
The lowest number will not always come first. 
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr){
  let l=Math.abs(arr[1]-arr[0])+1;
  return Array.from(Array(l).keys()).map((item)=>item+Math.min(...arr)).reduce((a,b)=>a+b,0);
}
sumAll([4,1]);
