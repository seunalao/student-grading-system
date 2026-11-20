
function showscore(studentName, schoolName, subject, score) {
    let remark;

    if (score >= 70 && score <= 100) {
        remark = "Excellent";
    } else if (score >= 60) {
        remark = "Very Good";
    } else if (score >= 50) {
        remark = "Good";
    } else if (score >= 45) {
        remark = "Fair";
    } else if (score >= 40) {
        remark = "Pass";
    } else if (score >= 0) {
        remark = "Fail";
    } else {
        remark = "Invalid score";
    }

    console.log(`Welcome ${studentName} from ${schoolName}. Your score in ${subject} is ${score}, and your grade is ${remark}.`);
}

showscore("Sarah", "Mushin High School", "Physics", 66);
