console.log("------- ON --------");

function moveZeros(arr) {
    let count = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) count.push(0)
    }
    let NewAr = arr.filter(n => n !== 0)
    return NewAr.concat(count)
}



console.log(moveZeros([
    'a', 0, 0, 'b', null,
    'c', 'd', 0, 1, false,
    0, 1, 0, 3, [],
    0, 1, 9, 0, 0,
    {}, 0, 0, 9
]));

console.log("------- OFF --------");