let fib_array = []

function fibs(n) {
    if (n==0) {
        return fib_array
    } else {
        fib_array[n] = fibs(n-1) + fibs(n-2)
    }
}

console.log(fibs(3))