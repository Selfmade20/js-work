const students = [
    { name: "Kamo", gender: "male" },
    { name: "Genaro", gender: "male" },
    { name: "Maggie", gender: "female" }
]


function getGender(students) {
    var maleTracker = 0;
    var femaleTracker = 0;

    for (var i in students) {
        if (students[i].gender == "male") {
            maleTracker++;
        }
        else{
            femaleTracker++;
        }
    }
    return `Males: ${maleTracker}, Females: ${femaleTracker}` 

}

console.log(getGender())