/* Implement a Spinal Case Converter

Spinal case is a string format where all words are in lowercase and separated by hyphens. "this-is-spinal-tap" is an example of a string in spinal case.

In this lab, you will create a function that converts a given string to spinal case.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function named spinalCase.
The spinalCase function should take a single argument, a string.
The spinalCase function should return the string in spinal case format. 
For example, if the argument is ProductLanding page, the function should return product-landing-page. */

function spinalCase(stri){
  let s=stri.replaceAll("_","");
  let sp=s.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");
  let res=sp[0].toLowerCase();
  for(let i=0;i<sp.length-1;i++){
    if(sp[i].toLowerCase()==sp[i] && sp[i+1]!="-" && sp[i+1].toUpperCase()==sp[i+1]){
      res+="-"+sp[i+1].toLowerCase();
    } else res+=sp[i+1];
  }
 return res;
}
spinalCase("Teletubbies say Eh-oh")
