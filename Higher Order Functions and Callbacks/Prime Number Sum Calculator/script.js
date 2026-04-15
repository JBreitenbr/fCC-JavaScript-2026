/* Build a Prime Number Sum Calculator

In this lab, you will build a calculator that takes a number and returns the sum of all prime numbers that are less than or equal to that number.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a sumPrimes function that accepts a number as an argument.
The sumPrimes function should return the sum of all prime numbers less than or equal to the provided number.
If the input number is less than 2, the function should return 0. */

function isPrime(n){
  let arr=Array.from(Array(n).keys()).reverse().map((item)=>item+1).slice(1).filter((item)=>n%item==0&&item!=1);
  return arr.length==0;
}

function sumPrimes(n){
  let sn=0;
  for(let i=2;i<=n;i++){
    if(isPrime(i)) sn+=i;
  }
  return sn;
}
sumPrimes(10);
