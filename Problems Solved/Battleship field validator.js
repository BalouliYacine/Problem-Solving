console.log("------- ON --------");
// function validateBattlefield(field) {
//     for (let I = 0; I < field.length; I++) {
//         console.log(field[I]);
//     }
// }

// validateBattlefield([
//     [1, 0, 0, 0, 0],
//     [1, 0, 1, 0, 0],
//     [1, 0, 1, 0, 1],
//     [1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
// ])





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
//         return Rec3(n - m, m) + Rec3(n, m - 1)
//     }
// }


// console.log(Rec3(9, 5));






console.log("------- OFF --------");
