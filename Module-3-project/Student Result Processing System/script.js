let studentName = "Divine";
let studentId = "ST001";

let mathematics = 85;
let english = 72;
let physics = 91;
let chemistry = 68;
let biology = 77;


// 1. Calculate Total
function calculateTotal(math, english, physics, chemistry, biology) {
    return math + english + physics + chemistry + biology;
}


// 2. Calculate Average
function calculateAverage(total, numberOfSubjects) {
    return total / numberOfSubjects;
}


// 3. Get Grade
function getGrade(average) {

    if (average >= 70) {
        return "A";
    } else if (average >= 60) {
        return "B";
    } else if (average >= 50) {
        return "C";
    } else if (average >= 40) {
        return "D";
    } else {
        return "F";
    }
}


// 4. Get Status
function getStatus(average) {

    if (average >= 50) {
        return "PASS";
    } else {
        return "FAIL";
    }
}


// 5. Get Performance Message
function getPerformanceMessage(grade) {

    if (grade === "A") {
        return "Excellent performance!";
    } else if (grade === "B") {
        return "Very good performance!";
    } else if (grade === "C") {
        return "Good performance.";
    } else if (grade === "D") {
        return "You need to improve.";
    } else {
        return "You need serious improvement.";
    }
}


// 6. Calculate results
let totalScore = calculateTotal(
    mathematics,
    english,
    physics,
    chemistry,
    biology
);

let averageScore = calculateAverage(totalScore, 5);

let grade = getGrade(averageScore);

let status = getStatus(averageScore);

let performance = getPerformanceMessage(grade);


// 7. Display result
console.log("Student:", studentName);
console.log("ID:", studentId);



console.log("Mathematics:", mathematics);
console.log("English:", english);
console.log("Physics:", physics);
console.log("Chemistry:", chemistry);
console.log("Biology:", biology);



console.log("Total:", totalScore);
console.log("Average:", averageScore);
console.log("Grade:", grade);
console.log("Status:", status);
console.log("Performance:", performance);
