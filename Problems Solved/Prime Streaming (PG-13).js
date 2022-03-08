console.log("------- ON --------");

class Primes {
    static * stream() {
        // replace this with your solution
        for (let p of [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]) {
            yield p;
        }
    }
}


console.log("------- OFF --------");