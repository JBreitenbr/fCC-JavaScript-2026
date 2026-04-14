/* Build a Smart Word Replacement Function

In this lab, you will create a function that performs a search and replace on the sentence using the arguments provided and then returns the new sentence.

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function named myReplace.
The myReplace function should take three arguments: a string, a word to be replaced, and the word to replace it with.
The myReplace function should return the new string with the replacement.
You should preserve the case of the first character in the original word when you are replacing it. */

function myReplace(stri,s1,s2){
  return stri.replace(s1,s1[0].toUpperCase()==s1[0]?s2[0].toUpperCase()+s2.slice(1):s2[0].toLowerCase()+s2.slice(1));
}
