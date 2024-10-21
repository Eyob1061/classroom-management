function updateStudentData() {
    let totalMarksArray = [];
    let averageMarksArray = [];
    for (let i = 1; i <= 10; i++) {
        let totalMarks = document.getElementById("totalMarks" + i).innerHTML;
        let averageMark = document.getElementById("averageMark" + i).innerHTML;
        totalMarksArray.push(totalMarks);
        averageMarksArray.push(averageMark);
    }
    let totalMarksString = JSON.stringify(totalMarksArray);
    let averageMarksString = JSON.stringify(averageMarksArray);
    localStorage.setItem("totalMarks", totalMarksString);
    localStorage.setItem("averageMarks", averageMarksString);
}

function getStudentData() {
    let totalMarksArray = JSON.parse(localStorage.getItem("totalMarks"));
    let averageMarksArray = JSON.parse(localStorage.getItem("averageMarks"));
    if (totalMarksArray != null && averageMarksArray != null) {
        for (let i = 1; i <= 10; i++) {
            let totalMarks = document.getElementById("totalMarks" + i).innerText;
            let averageMark = document.getElementById("averageMark" + i).innerText;
            document.getElementById("totalMarks" + i).innerHTML = totalMarks;
            document.getElementById("averageMark" + i).innerHTML = averageMark;
        }
    }
}

function generateRanks() {
let averageMarksArray = [];
for (let i = 1; i <= 10; i++) {
let averageMark = parseFloat(document.getElementById("averageMark" + i).innerText);
averageMarksArray.push({ id: i, averageMark: averageMark });
}
averageMarksArray.sort((a, b) => b.averageMark - a.averageMark);
let currentRank = 1;
let previousAverageMark = averageMarksArray[0].averageMark;
let rankArray = [];
for (let i = 0; i < averageMarksArray.length; i++) {
if (averageMarksArray[i].averageMark < previousAverageMark) {
    currentRank = i + 1;
}
rankArray.push(currentRank);
previousAverageMark = averageMarksArray[i].averageMark;
}
for (let i = 1; i <= 10; i++) {
document.getElementById("rank" + i).innerText = rankArray[i - 1];
}
}        function calculateTotalMarks() {
    let totalMarksArray = [];
    let subjectMarksArray = [];
    for (let i = 1; i <= 10; i++) {
        let totalMarks = 0;
        let subjectMarks = document.getElementsByTagName("tr")[i].getElementsByTagName("td");
        for (let j = 5; j <= 14; j += 2) {
            totalMarks += parseInt(subjectMarks[j].innerText);
        }
        totalMarksArray.push(totalMarks);
        subjectMarksArray.push(subjectMarks);
    }

    for (let i = 1; i <= 10; i++) {
        document.getElementById("totalMarks" + i).innerHTML = totalMarksArray[i - 1];
    }
}

function calculateAverageMarks() {
        let totalMarksArray = [];
        let subjectMarksArray = [];
        for (let i = 1; i <= 10; i++) {
            let totalMarks = 0;
            let subjectMarks = document.getElementsByTagName("tr")[i].getElementsByTagName("td");
            for (let j = 5; j <= 14; j += 2) {
                totalMarks += parseInt(subjectMarks[j].innerText); // <-- Fix here
            }
            totalMarksArray.push(totalMarks);
            subjectMarksArray.push(subjectMarks);
        }

        for (let i = 1; i <= 10; i++) {
            document.getElementById("averageMark" + i).innerHTML = (totalMarksArray[i - 1] / 5).toFixed(2);
        }
}

window.onload = getStudentData;
document.getElementById("rank-generator").onclick = generateRanks;
document.getElementById("total-marks-calculator").onclick = calculateTotalMarks;
document.getElementById("average-marks-calculator").onclick = calculateAverageMarks;