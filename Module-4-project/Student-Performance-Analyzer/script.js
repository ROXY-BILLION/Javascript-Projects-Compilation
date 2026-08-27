let students = [
    {
        id: 1,
        name: "Divine",
        score: 90
    },
    {
        id: 2,
        name: "David",
        score: 76
    },
    {
        id: 3,
        name: "Christian",
        score: 82
    },
    {
        id: 4,
        name: "Favour",
        score: 65
    },
]

newStudent = {
    id: 5,
    name: "Chukwudi",
    score: 78
}

students.push(newStudent);
console.log(students);

for (let student of students) {
        console.log(student)
}
    
let oneStudent = students.find((student) => student.id === 1)
console.log(oneStudent);

let passingStudents = students.filter((student) => student.score >= 80);
console.log(passingStudents);