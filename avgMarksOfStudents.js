/*Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.



Student Name	Marks

David	80

Vinoth	77

Divya	88

Ishitha	95

Thomas	68



The grades are computed as follows :

Range	Grade

<60 F

<70 D

<80 C

<90 B

<100 A
*/


getGradeOfStudents = (students) => {
  var sum=0, avg=0, noofStudent=0;
  for (let i in arr) {
     console.log(arr[i]); 
      sum += arr[i];
    noofStudent++;
  }
  avg = sum/noofStudent;
  
  if(avg < 60) return 'F';
  else if(avg < 70) return 'D';
  else if(avg < 80) return 'C';
  else if(avg < 90) return 'B';
  else if(avg < 100) return 'A';
}

var arr = [];
arr.David = 80;
arr.Vinoth = 77;
arr.Divya = 88;
arr.Ishitha = 95;
arr.Thomas = 68;
var grade = getGradeOfStudents(arr);
console.log(grade);