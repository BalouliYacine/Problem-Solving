console.log("------- ON --------");

  
console.log("------- OFF --------");

// function palindrome(str) {
// let t = str.replace(/[^a-z0-9]/gi, '').toLowerCase()
// console.log(t);
//     if(t.split('').join('')===t.split('').reverse().join('')) return true
//     else return false
//   }
  
// console.log(
//   palindrome("e/*y'e")
// );


// function alphanumeric(string) {
    //     //your code here
    //     // if (string === "") return false
    //     // else if (string.split('').includes(" ")) return false
    //     // else if (string.split('').includes('_')) return false
    //     // else if (string.split('').includes('!')) return false
    
    //     // else return true
    //     return /^[0-9a-z]+$/i.test(string)
    // }
    
    // console.log(alphanumeric(" "));


// function PaginationHelper(collection, itemsPerPage) {
//     this.itemC = collection.length
//     this.pageC = function () { return Math.ceil(collection.length / itemsPerPage) }
//     this.pageItemC = function (e) {
//         function chunk(items, size) {
//             const chunks = []
//             items = [].concat(...items)
//             while (items.length) {
//                 chunks.push(
//                     items.splice(0, size)
//                 )
//             }
//             return chunks
//         }
//         if (chunk(collection, itemsPerPage)[e]) return chunk(collection, itemsPerPage)[e].length
//         else return -1
//     }

//     this.pageIndx = function (i) {
//         if (i > collection.length || i < 0) return -1
//         else if (i === itemsPerPage) return 0
//         else {
//             return Math.floor(i / itemsPerPage)
//         }
//     }
// }

// PaginationHelper.prototype.itemCount = function () {
//     return this.itemC
// }
// PaginationHelper.prototype.pageCount = function () {
//     return this.pageC()
// }
// PaginationHelper.prototype.pageItemCount = function (pageIndex) {
//     return this.pageItemC(pageIndex)
// }

// PaginationHelper.prototype.pageIndex = function (itemIndex) {
//     return this.pageIndx(itemIndex)
// }

// //
// var helper =
//     new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);


// function solution(input, markers) {
//     let allNpt = input.split("\n")
//     let newnpt = []
//     for (let i = 0; i < allNpt.length; i++) {
//         if (allNpt[i].split('').includes(`${markers[0]}`)) {
//             newnpt.push(allNpt[i]
//                 .split('')
//                 .slice(0, (allNpt[i]
//                     .split('')
//                     .indexOf(`${markers[0]}`)) - 1)
//                 .join('')
//             )
//         } else if (allNpt[i].split('').includes(`${markers[1]}`)) {
//             newnpt.push(allNpt[i]
//                 .split('')
//                 .slice(0, (allNpt[i]
//                     .split('')
//                     .indexOf(`${markers[1]}`)) - 1)
//                 .join('')
//             )
//         } else newnpt.push(allNpt[i]);
//     }

//     return newnpt.join("\n")
// };


// console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// );

// function sqInRect(lng, wdth) {
//     if (lng === wdth) {
//         return null;
//     }
//     let squares = [];
//     //
//     while (lng !== wdth) {
//         if (lng > wdth) {
//             squares.push(wdth);
//             lng = lng - wdth;
//         } else {
//             squares.push(lng);
//             wdth = wdth - lng;
//         }
//     }
//     //
//     squares[squares.length] = squares[squares.length - 1];
//     return squares;
// }

// console.log(sqInRect(9, 10));






// function inArray(array1, array2) {
//     let r = []
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//             if (array2[j].includes(array1[i])) r.push(array1[i]);
//         }
//     }
//     return [...new Set(r)].sort()
// }

// console.log(inArray(["arp", "live", "strong"],
// ["lively", "alive", "harp", "sharp", "armstrong"]));

// function diamond(n) {
//     if (n < 0 || n % 2 === 0) return null
//     let A = []
//     for (let i = 0; i < n; i++) {
//         if (i % 2 !== 0) continue
//         A.push(' '.repeat((n - i) / 2) + '*'.repeat(i + 1) + '\n');
//     }
//     diam = A.join('') + A.reverse().slice(1).join('')
//     return diam;
// }

// console.log(diamond(5));

// function validParentheses(parens) {
//   let opens = []
//   for (let i = 0; i < parens.length; i++) {
//     if (parens[i] === '(') {
//       opens.push(parens[i])
//     }
//     else {
//       if (opens.length === 0) return false
//       let lastV = opens[opens.length - 1]

//       if (parens[i] === ')' && lastV === '(') {
//         opens.pop()
//       } else {
//         break
//       }
//     }
//     console.log(opens);
//   }
//   return opens.length === 0
// }

//not mine
// function validParentheses(parens) {
//   var n = 0;
//   for (var i = 0; i < parens.length; i++) {
//     if (parens[i] == '(') n++;
//     if (parens[i] == ')') n--;
//     if (n < 0) return false;
//   }
//   return n == 0;
// }

// console.log(validParentheses("()"));


// Equal Sides Of An Array
// function findEvenIndex(arr) {
//   let k;
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   let sumArr = [arr[0]];
//   for (let i = 1; i < arr.length; i++) {
//     sumArr.push(arr[i] + sumArr[i - 1]);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     let Lsum = sumArr[i] - arr[i];
//     let Rsum = total - sumArr[i];
//     if (Lsum == Rsum) {
//       return (k = i);
//     }
//   }
//   if (k == undefined) {
//     return -1;
//   } else {
//     return k;
//   }
// }
// function findEvenIndex(arr) {
//   var left = 0,
//     right = arr.reduce(function (pv, cv) {
//       return pv + cv;
//     }, 0);
//   for (var i = 0; i < arr.length; i++) {
//     if (i > 0) left += arr[i - 1];
//     right -= arr[i];

//     if (left == right) return i;
//   }

//   return -1;
// }

// function descendingOrder(n) {
//   return parseInt(
//     String(n)
//       .split("")
//       .sort(function (a, b) {
//         return b - a;
//       })
//       .join("")
//   );
// }
// function descendingOrder(n) {
//   return parseInt(String(n).split("").sort().reverse().join(""));
// }

//
//Narcissistic Number
// function narcissistic(value) {
//   //
//   let myInt = String(value);
//   let myFunc = (num) => Number(num);
//   var intArr = Array.from(String(myInt), myFunc);
//   //
//   let summ = intArr.map(function (ele) {
//     return ele ** intArr.length;
//   });
//   let sum = 0;
//   for (let i = 0; i < summ.length; i++) {
//     sum += summ[i];
//   }
//   return sum == value;
// }
// function narcissistic(value) {
//   return (
//     ("" + value).split("").reduce(function (p, c) {
//       return p + Math.pow(c, ("" + value).length);
//     }, 0) == value
//   );
// }

// Stop gninnipS My sdroW!
// let b = spinWords("jackk is foolish");
// console.log(b);
// //
// // function spinWords(string) {
// //   let ar = string.split(" ");
// //   let ar2 = ar.map(function (ele) {
// //     if (ele.length < 5) {
// //       return ele;
// //     } else {
// //       let p = ele.split("").reverse().join("");
// //       return p;
// //     }
// //   });
// //   return ar2.join(" ");
// // }
// //
// function spinWords(words) {
//   return words
//     .split(" ")
//     .map(function (word) {
//       return word.length > 4 ? word.split("").reverse().join("") : word;
//     })
//     .join(" ");
// }

//EL zero weB
// const chosen = 1;
// //
// let myF = [
//   { title: "osama", age: 23, avilable: true, skils: ["html", "css"] },
//   { title: "omar", age: 40, avilable: false, skils: ["py", "django"] },
//   { title: "imad", age: 28, avilable: true, skils: ["php", "laravel"] },
// ];
// //
// if (true) {
//   let { title: t, age: a, avilable: av, skils: sk } = myF[chosen - 1];
//   console.log(t);
//   console.log(`${a}`);
//   av == true ? console.log("avilabel") : console.log("not avilabel");
//   console.log(sk[1]);
// }

//
// let letters = "abcdefghiklm";
// let b = "ghikm";
// //
// let arrB = b.split("");
// let arrL = letters.split("");
// //
// for (let i = 0; i < arrB.length; i++) {
//   if (arrB[i] != arrL[i + arrL.indexOf(arrB[0])]) {
//     console.log(arrL[i + arrL.indexOf(arrB[0])]);
//     break;
//   }
// }

//
// let btn = document.querySelector("#btn");

// window.onscroll = function () {
//   if (this.scrollY > 500) {
//     btn.addEventListener("click", function () {
//       window.scrollTo({ top: 0 });
//     });
//     btn.style.display = "block";
//   } else {
//     btn.style.display = "none";
//   }
// };
// // Set the date we're counting down to
// var countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function () {
//   //
//   var now = new Date().getTime();
//   //
//   var distance = countDownDate - now;
//   //
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//   //
//   document.getElementById("demo").innerHTML =
//     days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
//   //
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);

