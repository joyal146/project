const students = [
 {name:"Alan",score:95},
 {name:"John",score:80},
 {name:"Tom",score:65},
 {name:"Sam",score:40}
];

students.forEach(student=>{

 let grade;

 if(student.score>=90)
     grade="A";

 else if(student.score>=75)
     grade="B";

 else if(student.score>=60)
     grade="C";

 else
     grade="F";

 console.log(
 `${student.name} : ${grade}`
 );

});