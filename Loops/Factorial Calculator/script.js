/* Build a Factorial Calculator

A factorial is the product of an integer and all the integers below it. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120. In this lab, you will create a factorial calculator that takes a number from the user and calculates the factorial of that number.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab. */

function factorialCalculator(n){
  let result=1;
  for(let i=2;i<=n;i++){
    result*=i;
  }
  return result;
}

let num=5;
let factorial=factorialCalculator(num);
let resultMsg=`Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
