const memo = ["A", "B", "A"]
const answers = ["C", "B", "A"]

function calculateMarks(memo, answers) {
    var totalMarks = 0
    for (var i in answers[i]) {
        if (answers[i] === memo) {
            return totalMarks+1
        }       
    }
    return totalMarks
}

console.log("Hello class the total marks are ", calculateMarks(memo, answers))