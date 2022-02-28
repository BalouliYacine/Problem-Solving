console.log("------- ON --------");

function validateBattlefield(field) {
    let shipsType = []
    let counter = 0
    //
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] === 1) {
                field[i][j] = '§'
                shipsType.push(1)
                let p = 1
                function HCheck(a, b) {
                    if (p === 4) return
                    else if (field[a][b + p] === 1) {
                        field[a][b + p] = "§"
                        shipsType.pop()
                        shipsType.push(p + 1)
                        p++
                        HCheck(a, b)
                    }
                }
                //
                function VCheck(a, b) {
                    if (p === 4) return
                    else if (field[a + p] != undefined
                        && field[a + p][b] === 1) {
                        field[a + p][b] = '§'
                        shipsType.pop()
                        shipsType.push(p + 1)
                        p++
                        VCheck(a, b)
                    }
                }
                HCheck(i, j)
                p = 1
                VCheck(i, j)
            }
        }
    }
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] === "§") {
                if (field[i + 1][j] === "§") counter++
                if (i != 0 && field[i - 1][j] === "§") counter++
                if (field[i][j + 1] === "§") counter++
                if (field[i][j - 1] === "§") counter++
                if (i != 0 && field[i - 1][j - 1] === "§") counter++
                if (field[i + 1][j + 1] === "§") counter++
                if (i != 0 && field[i - 1][j + 1] === "§") counter++
                if (field[i + 1][j - 1] === "§") counter++
            }
        }
    }
    function arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;
        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }
    return counter === 20 && arraysEqual(shipsType.sort(), [1, 1, 1, 1, 2, 2, 2, 3, 3, 4])
}

// solution 2
// function validateBattlefield(field) {
//     let shipsType = []
//     let counter = 0
//     // vertical and horizontal chack
//     for (let i = 0; i < field.length; i++) {
//         for (let j = 0; j < field[i].length; j++) {
//             if (field[i][j] === 1) {
//                 field[i][j] = '§'
//                 shipsType.push(1)
//                 // H Check  
//                 if (field[i][j + 1] === 1) {
//                     field[i][j + 1] = '§'
//                     shipsType.pop()
//                     shipsType.push(2)
//                     if (
//                         field[i][j + 2] === 1) {
//                         field[i][j + 2] = '§'
//                         shipsType.pop()
//                         shipsType.push(3)
//                         if (field[i][j + 3] === 1) {
//                             field[i][j + 3] = '§'
//                             shipsType.pop()
//                             shipsType.push(4)
//                         }
//                     }
//                 }
//                 // V Check
//                 else if (field[i + 1] != undefined
//                     && field[i + 1][j] === 1) {
//                     field[i + 1][j] = '§'
//                     shipsType.pop()
//                     shipsType.push(2)
//                     if (field[i + 2] != undefined
//                         && field[i + 2][j] === 1) {
//                         field[i + 2][j] = '§'
//                         shipsType.pop()
//                         shipsType.push(3)
//                         if (field[i + 3] != undefined
//                             && field[i + 3][j] === 1) {
//                             field[i + 3][j] = '§'
//                             shipsType.pop()
//                             shipsType.push(4)
//                         }
//                     }
//                 }
//             }

//         }
//     }
//     // corner check
//     for (let i = 0; i < field.length; i++) {
//         for (let j = 0; j < field[i].length; j++) {
//             if (field[i][j] === "§") {
//                 if (field[i + 1][j] === "§") counter++
//                 if (i != 0 && field[i - 1][j] === "§") counter++
//                 if (field[i][j + 1] === "§") counter++
//                 if (field[i][j - 1] === "§") counter++
//                 if (i != 0 && field[i - 1][j - 1] === "§") counter++
//                 if (field[i + 1][j + 1] === "§") counter++
//                 if (i != 0 && field[i - 1][j + 1] === "§") counter++
//                 if (field[i + 1][j - 1] === "§") counter++
//             }
//         }
//     }
//     // valid chip number and type check
//     function arraysEqual(a, b) {
//         if (a === b) return true;
//         if (a == null || b == null) return false;
//         if (a.length !== b.length) return false;
//         for (var i = 0; i < a.length; ++i) {
//             if (a[i] !== b[i]) return false;
//         }
//         return true;
//     }

//     return counter === 20 &&
//         arraysEqual(shipsType.sort(), [1, 1, 1, 1, 2, 2, 2, 3, 3, 4])
// }

console.log(
    validateBattlefield([
        [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]])
);

console.log("------- OFF --------");

// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript