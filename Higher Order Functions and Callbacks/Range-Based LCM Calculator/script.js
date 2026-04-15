/* Implement a Range-Based LCM Calculator
In this lab, you will create a function that takes an array of two numbers and returns the least common multiple (LCM) of those two numbers and all the numbers between them.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories

You should have a smallestCommons function that accepts an array of two numbers as an argument.
The smallestCommons function should return the smallest common multiple that is evenly divisible by both numbers and all sequential numbers in the range between them.
The function should handle input where the two numbers are not in numerical order. */

function kgv(a,b){
  let s1=Array.from(Array(a).keys()).map((item)=>item+1).filter((item)=>a%item==0);
  let s2=Array.from(Array(b).keys()).map((item)=>item+1).filter((item)=>b%item==0);
  let d=Array.from((new Set(s2)).intersection(new Set(s1))).sort((a,b)=>b-a)[0];
  return a*b/d;
}

function smallestCommons(arr){
  let s1=arr[0]<arr[1]?arr[0]:arr[1];
  let s2=arr[1]>arr[0]?arr[1]:arr[0];
  let r=Array.from(Array(s2-s1+1).keys()).map((item)=>item+s1);
  return r.reduce((a,b)=>kgv(a,b),1);
}
smallestCommons([5, 1]) 
