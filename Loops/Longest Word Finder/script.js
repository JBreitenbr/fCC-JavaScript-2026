/* Build a Longest Word Finder App

In this lab, you will build a function that returns the length of the longest word in the provided sentence.

For example, in the sentence "The quick brown fox jumped over the lazy dog", the longest word is "jumped", which has a length of 6. */

function findLongestWordLength(stri){
  return stri.split(" ").sort((a,b)=>b.length-a.length)[0].length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog")
