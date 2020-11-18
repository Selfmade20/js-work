const people = [
    {
        firstName: "Jabu",
        surname: "Malende",
        educated: false,
        age: 21,
        address: {
            street: "Dr Alfred Xuma street",
            postalCode: 3437,
        }
    }, {
        firstName: "Tebogo",
        surname: "Selamolela",
        educated: false,
        age: 17,
        address: {
            street: "Mandela avenue",
            postalCode: 2237,
        }
    }, {
        firstName: "Masindi",
        surname: "Van Wyk",
        educated: true,
        age: 32,
        address: {
            street: "Sandton beulevard",
            postalCode: 337,
        }
    }
]

people[1].email = "tebogo1686@gmail.com"
people[0].email = "madindi@gmail.com"

people.push({
    firstName: "Collen",
    surname: "Maphike",
    educated: true,
    age: 11,
    address: {
        street: "Africa",
        postalCode: null,
    }
})

// For Loops

// for (let i = 0; i <= people.length; i++) {
//     console.log(people[i].address)
// }

// ForEach

people.forEach(function (names) {
    // console.log("For Each Name :",names.firstName)
})

// // Mapping arrays

const peopleNames = people.map(function (names) {
    return names.firstName
})
// console.log("Mapping", peopleNames)

// // Filtering

const peopleArray = people.filter(function (names) {
    return names.educated === false;
}).map(function (names) {
    return names.address
})
console.log("Filtered and mapped", peopleArray)