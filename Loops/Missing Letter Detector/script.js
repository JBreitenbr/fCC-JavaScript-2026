/* Build a Missing Letter Detector

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named fearNotLetter.
The fearNotLetter function should accept one argument: a string representing a range of letters in alphabetical order which can have one letter missing.
The function should find the missing letter in the passed letter range and return it.
If all letters are present in the range, the function should return undefined. */

function fearNotLetter(stri){
  let alph="abcdefghijklmnopqrstuvwxyz";
  let ind1=alph.indexOf(stri[0]);
  let ind2=alph.indexOf(stri[stri.length-1]);
  let c=alph.slice(ind1,ind2+1);
  let s1=new Set(stri);
  let s2=new Set(c);
  return Array.from((s2.difference(s1)))[0];
}
