console.log("------- ON --------");

function countPatternsFrom(firstPoint, length) {
    let ar = [
        {
            valeu: "A",
            visted: false,
            Neighbors:
                ["B", "C", "D", "E", "F", "G", "H", "I"]
        },
        {
            valeu: "B",
            visted: false,
            Neighbors:
                ["A", "C", "D", "E", "F", "G", "H", "I"]
        },
        {
            valeu: "D",
            visted: false,
            Neighbors:
                ["B", "C", "A", "E", "F", "G", "H", "I"]
        },
        {
            valeu: "E",
            visted: false,
            Neighbors:
                ["B", "C", "D", "A", "F", "G", "H", "I"]
        }
    ]

    function Count(Element) {
        Element.visted = true
        console.log(Element.valeu + ' is visted: ' + Element.visted);
        console.log('');
        // 
        Element.Neighbors.forEach(e2 => {
            ar.find((p) => {
                if (p.valeu === e2 && p.visted === false) {
                    Count(p)
                }
            })
        })
    }

    function Finder(ar) {
        ar.find((p) => {
            if (p.valeu === firstPoint) {
                Count(p)
            }
        });
    }


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

    return Finder(ar)
}


console.log(countPatternsFrom("B", 5));







console.log("------- OFF --------");