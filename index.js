const arr = [
    { id: "1", rank: 1 },
    {
        id: "2", rank: 1, children: [
            { id: "2.1", rank: 2 },
            { id: "2.2", rank: 2 }
        ]
    },
    {
        id: "3", rank: 1, children: [
            {
                id: "3.1", rank: 2, children: [
                    {
                        id: "3.1.1", rank: 3, children: [
                            {
                                id: "3.1.1.1", rank: 4, children: [
                                    { id: "3.1.1.1.1", rank: 5 }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
document.getElementById("dataContainer").innerText = JSON.stringify(arr);
const res = [];
const getRes = (arr) => {
    if (arr && arr instanceof Array) {
        for (let i = 0; i < arr.length; i += 1) {
            res.push(arr[i]);
            getRes(arr[i].children);
        }
    }
}

getRes(arr);
document.getElementById("resContainer").innerText = JSON.stringify(res);
console.info(arr);
console.info(res);