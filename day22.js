let students = [
    {name:"Alan",score:80},
    {name:"John",score:45},
    {name:"Tom",score:70}
];

let passed =
students.filter(
student=>student.score>60
);

console.log(passed);