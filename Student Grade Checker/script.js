// STUDENT GRADE CHECKER // 

// ---------- STUDENT DATA ----------

let studentName = "Divine";
let studentId = "ST001";

let mathematics = 80;
let english = 65;
let physics = 72;
let chemistry = 58;
let biology = 75;


// ---------- DISPLAY STUDENT ----------

console.log("STUDENT GRADE CHECKER");


console.log("Name:", studentName);
console.log("ID:", studentId);


console.log("Mathematics:", mathematics);
console.log("English:", english);
console.log("Physics:", physics);
console.log("Chemistry:", chemistry);
console.log("Biology:", biology);


// ---------- SCORE VALIDATION ----------

let scoresValid = true;

if (
    mathematics < 0 || mathematics > 100 ||
    english < 0 || english > 100 ||
    physics < 0 || physics > 100 ||
    chemistry < 0 || chemistry > 100 ||
    biology < 0 || biology > 100
) {
    scoresValid = false;
}


if (!scoresValid) {

    console.log("Invalid score detected.");
    console.log("Scores must be between 0 and 100.");

} else {

    // ---------- TOTAL ----------

    let totalScore =
        mathematics +
        english +
        physics +
        chemistry +
        biology;


    // ---------- AVERAGE ----------

    let averageScore = totalScore / 5;


    // ---------- GRADE ----------

    let grade;

    if (averageScore >= 70) {
        grade = "A";

    } else if (averageScore >= 60) {
        grade = "B";

    } else if (averageScore >= 50) {
        grade = "C";

    } else if (averageScore >= 40) {
        grade = "D";

    } else {
        grade = "F";
    }


    // ---------- PASS / FAIL ----------

    let status = averageScore >= 50 ? "PASS" : "FAIL";


    // ---------- PERFORMANCE MESSAGE ----------

    let performanceMessage;

    switch (grade) {

        case "A":
            performanceMessage = "Excellent performance!";
            break;

        case "B":
            performanceMessage = "Very good performance!";
            break;

        case "C":
            performanceMessage = "Good performance!";
            break;

        case "D":
            performanceMessage = "Keep improving!";
            break;

        case "F":
            performanceMessage = "You need to work harder.";
            break;

        default:
            performanceMessage = "Invalid grade.";
    }


    // ---------- FINAL RESULT ----------


    console.log("Total Score:", totalScore);
    console.log("Average Score:", averageScore);
    console.log("Grade:", grade);
    console.log("Status:", status);
    console.log("Performance:", performanceMessage);

}