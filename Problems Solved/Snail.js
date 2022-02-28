console.log("------- ON --------");

snail = function (array) {
    if (array.length === 1) return array[0];
    let ar = []
    function Rec(arr) {
        if (arr.length === 0) return
        // left
        for (let i = 0; i < arr.length; i++) {
            ar.push(arr[0][i])
        }
        // down
        for (let j = 0; j < arr.length - 1; j++) {
            ar.push(arr[j + 1][arr.length - 1])
            arr[j + 1].pop()
        }
        // right
        for (let p = arr.length - 1; p >= 0; p--) {
            if (arr[arr.length - 1][p] === undefined) continue
            ar.push(arr[arr.length - 1][p])
        }
        // up
        for (let t = arr.length - 2; t >= 1; t--) {
            ar.push(arr[t][0])
            arr[t].shift()
        }
        // 
        arr.shift()
        arr.pop()
        Rec(arr)
    }
    Rec(array)
    if (ar[ar.length - 1] === ar[ar.length - 2]) ar.pop()
    return ar;
}

console.log(snail([
    [653, 550, 749, 502, 777, 304, 4],
    [650, 856, 759, 16, 821, 202, 472],
    [109, 903, 152, 884, 9, 499, 88],
    [457, 939, 188, 302, 742, 605, 352],
    [414, 437, 343, 898, 95, 140, 320],
    [745, 815, 303, 187, 202, 541, 262],
    [783, 539, 397, 430, 247, 701, 882]]));

console.log("------- OFF --------");