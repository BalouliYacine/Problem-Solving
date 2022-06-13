console.log('Start');
console.log('----------------');
console.log('');
// 
function order(words) {
    if (words === '') { return '' }
    let ar = []
    const map = words.split(' ').map(x => x.match(/\d+/)[0]);
    for (let i = 0; i < words.split(' ').length; i++) {
        ar.push(map[i] + words.split(' ')[i]);
    }
    const finalSTR = ar.sort().map(x => x.substring(1));
    return finalSTR.join(" ")
}

console.log(order("is2 Thi1s T4est 3a"));


// 
console.log('');
console.log('----------------');