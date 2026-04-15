/* Implement a Matching Object Filter

In this lab, you will create a function that filters an array of objects and returns only those objects that match all key-value pairs in a given source object.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a whatIsInAName function that accepts two arguments, an array of objects and a source object.
The whatIsInAName function should return a new array containing only the objects from the collection that have all the key–value pairs present in the source object.
If no objects match all the key–value pairs from the source, the function should return an empty array. For example:
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
// should return [{ first: "Tybalt", last: "Capulet" }]
*/

function checkVar(arrObj,obj){
  let k=Object.keys(obj);
    for(let i=0;i<k.length;i++){
      if(arrObj[k[i]]!=obj[k[i]]) return false;
        }
    return true;
  }
            
function whatIsInAName(arr,obj){
    let k=Object.keys(obj);
    let t=Object.entries(obj);
    let s=arr.map((item)=>Object.entries(item))
    let ind=[];
    for(let k=0;k<t.length;k++){
      for(let i=0;i<s.length;i++){
        for(let j=0;j<s[i].length;j++){
          if(s[i][j][0]==t[k][0] && s[i][j][1]==t[k][1]) ind.push(i); }
      }
    }
  return Array.from(new Set(ind)).map((item)=>arr[item]).filter((item)=>checkVar(item,obj));
}

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })
                                              
