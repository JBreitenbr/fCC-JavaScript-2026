let inputText=document.getElementById("text-input");
let resultText=document.getElementById("result");

function palindromeCheck(str) {
  let regex=/\W|_/g; 
  let str2=str.toLowerCase().replace(regex,"");
let boolVal=str2.split("").reverse().join("")==str2;
let resString;
if(boolVal){
  resString=`${str} is a palindrome`;
}
  else resString=`${str} is not a palindrome`;
return resString;
}

function handleClick() {
  let val=inputText.value;
  if(val.length==0){
    alert("Please input a value");
  }
  else {
    result.innerText=palindromeCheck(val);
  }
}
