console.log("------- ON --------");

function countPatternsFrom(firstPoint, length) {
    let ar = [
        {
            valeu: "A",
            Neighbors:
                ["B", "D", "E"]
        },
        {
            valeu: "B",
            Neighbors:
                ["A", "D", "E"]
        },
        {
            valeu: "D",
            Neighbors:
                ["B", "A", "E"]
        },
        {
            valeu: "E",
            Neighbors:
                ["B", "D", "A"]
        }
    ]
    let list = []

    function Count(Element) {
        Element.Neighbors.forEach(e2 => {
            ar.find((p) => {
                if (p.valeu === e2) {
                    if (length === 1) return list = [firstPoint]
                    //
                    list.push([firstPoint,
                        p.valeu,
                        ...[...p.Neighbors.filter(e => e !== firstPoint)]].splice(0, length))
                    // 
                    length !== 2 &&
                        list.push([firstPoint,
                            p.valeu,
                            ...[...p.Neighbors.filter(e => e !== firstPoint)
                                .reverse()]].splice(0, length))
                }
            })
        })
    }

    function Finder(ar) {
        ar.find((p) => {
            if (p.valeu === firstPoint) {
                console.log('Start is: ' + firstPoint);
                Count(p)
                console.log(list);
            }
        });
    }

    return Finder(ar)
}

console.log(countPatternsFrom("B", 4));


// let ar = [
//     ["A", "B", "C"],
//     ["D", "E", "F"],
//     ["G", "H", "I"],
// ]

// for (let i = 0; i < ar.length; i++) {
//     if (ar[i].find(e => e === firstPoint)) {
//         console.log("Found: " + firstPoint + " and length is: " + length);

//     };
// }





console.log("------- OFF --------");