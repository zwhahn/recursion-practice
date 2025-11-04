const fib_array = [];

function fibs(n) {
    if (n == 0) {
        return fib_array;
    }
    else if (n == 1) {
        fib_array = [0];
    }
    else if (n == 2) {
        fib_array = [0, 1];
    }
    else {
        fib_array = [0, 1];
        for (i = 2; i < n; i++) {
            n_1 = fib_array[i-2];
            n_2 = fib_array[i-1];
            fib_array[i] = n_1 + n_2;
        }
    }
    return fib_array;
}
