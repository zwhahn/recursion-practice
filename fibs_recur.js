function fibs(n) {
    if (n <= 2) {
        return [0, 1]
    } else {
        let previous = fibs(n-1)
        let lengthOfPrevious = previous.length
        let nextNumber = previous[lengthOfPrevious-1] + previous[lengthOfPrevious-2]
        previous.push(nextNumber)
        return previous

    }
}

console.log(fibs(0))
console.log(fibs(1))
console.log(fibs(2))
console.log(fibs(3))
console.log(fibs(4))
console.log(fibs(5))
console.log(fibs(6))
console.log(fibs(7))
console.log(fibs(8))