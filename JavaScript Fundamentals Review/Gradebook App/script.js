/* Build a Gradebook App

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named getAverage that takes an array of test scores as a parameter and returns the average score.

You should have a function named getGrade that takes a student score as a parameter and returns a string representing a letter grade based on the score. Here are the scores and their corresponding letter grades:

Score Range	Grade
100	         "A+"
90 - 99	     "A"
80 - 89	     "B"
70 - 79	     "C"
60 - 69	     "D"
0 -  59	     "F"
You should have a function named hasPassingGrade that takes a score as a parameter and returns either true or false depending on if the score corresponds to a passing grade.

The hasPassingGrade function should use the getGrade function to get the letter grade, and use it to determine if the grade is passing. A passing grade is anything different from "F".

You should have a function named studentMsg that takes an array of scores and a student score as the parameters. The function should return a string with the format:

"Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.", if the student passed the course.
"Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.", if the student failed the course.
Replace average-goes-here with the average of total scores and grade-goes-here with the student's grade. Use getAverage to get the average score and getGrade to get the student's grade. */

const getAverage=(arr)=>{
  return arr.reduce((a,b)=>a+b,0)/arr.length;
}

const getGrade=(num)=>{
  let grade;
  grade=num==100?"A+":(num>=90?"A":(num>=80?"B":(num>=70?"C":(num>=60?"D":"F"))));
  return grade;
}

const hasPassingGrade=(score)=>{
  let pass;
  pass=getGrade(score)==="F"?false:true;
  return pass;
}

const studentMsg=(allScores,studentScore)=>{
  let avg=getAverage(allScores);
  let yourGrade=getGrade(studentScore);
  let passed=hasPassingGrade(studentScore);
  return passed==true?`Class average: ${avg}. Your grade: ${yourGrade}. You passed the course.`:`Class average: ${avg}. Your grade: ${yourGrade}. You failed the course.`
}
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100) );
