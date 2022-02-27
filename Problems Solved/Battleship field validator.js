console.log("------- ON --------");

function validateBattlefield(field) {
    let shipsCount = 0
    let shipsType = []
    let check = true
    //
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] === 1) {
                field[i][j] = '#'
                // H Check
                if (field[i][j + 1] === 1) {
                    field[i][j + 1] = '§'
                    if (field[i + 1][j + 1]) return check = false
                    if (field[i - 1] != undefined
                        && field[i - 1][j + 1]) return check = false
                    //
                    if (
                        field[i][j + 2] === 1) {
                        field[i][j + 2] = '§'
                        if (field[i + 1][j + 2]) return check = false
                        if (field[i - 1] != undefined
                            && field[i - 1][j + 2]) return check = false
                        //
                        if (field[i][j + 3] === 1) {
                            field[i][j + 3] = '§'
                            if (field[i + 1][j + 3]) return check = false
                            if (field[i - 1] != undefined
                                && field[i - 1][j + 3]) return check = false
                        }
                    }
                }
                // V Check
                if (field[i + 1] != undefined
                    && field[i + 1][j] === 1) {
                    field[i + 1][j] = '§'
                    if (field[i + 1][j + 1]) return check = false
                    if (field[i + 1][j - 1]) return check = false
                    //
                    if (field[i + 2] != undefined
                        && field[i + 2][j] === 1) {
                        field[i + 2][j] = '§'
                        if (field[i + 2][j + 1]) return check = false
                        if (field[i + 2][j - 1]) return check = false
                        //
                        if (field[i + 3] != undefined
                            && field[i + 3][j] === 1) {
                            field[i + 3][j] = '§'
                            if (field[i + 3][j + 1]) return check = false
                            if (field[i + 3][j - 1]) return check = false
                        }
                    }
                }
                shipsCount++
            }
        }
    }
    return check
}

console.log(
    validateBattlefield([
        [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]])
);

console.log("------- OFF --------");



// Recursive

// Exemple 1
// Rrc(n) = Rec(n-1) + n
// function Rec(n) {
//     if (n === 0) return 0
//     else {
//         return n + Rec(n - 1)
//     }
// }
// console.log(Rec(5));

// Exemple 2
// function Rec2(n, m) {
//     if (n === 1 || m === 1) return 1
//     else {
//         return Rec2(n - 1, m) + Rec2(n, m - 1)
//     }
// }
// console.log(Rec2(4, 5));

// Exemple 3
// function Rec3(n, m) {
//     if (n === 0) return 1
//     if (m === 0 || n < 0) return 0
//     else {
//         return Rec3(n - m, m) + Rec3(n, m - 1) }
// }


// console.log(Rec3(9, 5));






