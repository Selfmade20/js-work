const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function getEvenNumbers(numbers) {
    let even = [];
    
    for (var i in numbers) {
        if (numbers[i] %  2 === 0) {
           even.push(numbers[i])
        }
    }
    return even;
}

console.log(getEvenNumbers(numbers))



  