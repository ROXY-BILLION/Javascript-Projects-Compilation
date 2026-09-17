const StudentNumber = document.getElementById("studentCount");
const students = [
    { name: "Roxy", score: 85 },
    { name: "John", score: 62 },
    { name: "Mary", score: 91 },
    { name: "David", score: 48 },
    { name: "Sarah", score: 76 },
    { name: "Divine", score: 91 }
];

const AverageScore = document.getElementById("averageScore");
const StudentList = document.getElementById("studentList");
const PassedStudent = document.getElementById("passedCount");
const FailedStudent = document.getElementById("failedCount");
const SearchInput = document.getElementById("searchInput");
const SearchResult = document.getElementById("searchResult");



StudentNumber.textContent = students.length;
students.forEach(function(student) {

    const card = document.createElement("div");

    const studentName = document.createElement("h1");

    const studentScore = document.createElement("h2");

    studentName.textContent = student.name;
    studentScore.textContent = student.score;

    card.appendChild(studentName);
    card.appendChild(studentScore);

    card.className = "student-card";

    StudentList.appendChild(card);
});

let totalScore = 0;

students.forEach(function (student) {

    totalScore = totalScore + student.score;

});
AverageScore.textContent = totalScore / students.length;

const passed = students.filter(function(student) {
    return student.score >70;
});
PassedStudent.textContent = passed.length;

const failed = students.filter(function(student) {
    return student.score <70;
});
FailedStudent.textContent = failed.length;

SearchInput.addEventListener("input", function() {
    const searchValue = SearchInput.value;
    if (searchValue === "") {
        SearchResult.textContent = "";
        return;
    }

    const searchResult = students.find(function(student) {
        return searchValue === student.name;
    });
    if (searchResult) {
        SearchResult.textContent =
            searchResult.name + " -   -   -   -   -   -   -   -     -      -         -          - " + searchResult.score;
    } else {
        SearchResult.textContent = "No student found";
    }
})