console.log("------- ON --------");

function moveZeros(arr) {
    let count = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) count.push(0)
    }
    return arr.filter(n => n !== 0).concat(arr.filter(n => n === 0))

    // OR just this one line code
    // return arr.filter(n => n !== 0).concat(arr.filter(n => n === 0))
}

console.log(moveZeros([
    'a', 0, 0, 'b', null,
    'c', 'd', 0, 1, false,
    0, 1, 0, 3, [],
    0, 1, 9, 0, 0,
    {}, 0, 0, 9
]));

console.log("------- OFF --------");