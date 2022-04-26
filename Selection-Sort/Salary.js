
let arr = [{"name":"Ram","salary":100000},
           {"name":"Ramesh","salary":10000},
           {"name":"Rakesh","salary":500000},
           {"name":"Riya","salary":650000},
           {"name":"Rithika","salary":45000},
           {"name":"Ritesh","salary":230000}];

function findMin(arr, startIndex){
    let minIndexTillNow = startIndex;
    for(let i = startIndex; i < arr.length; i++){
        if(arr[minIndexTillNow].salary > arr[i].salary){
            minIndexTillNow = i;
        }
    }
    return minIndexTillNow;
}

for(let i=0; i<arr.length; i++){
    let minIndex = findMin(arr,i);
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}

console.log(arr);
console.log(arr[arr.length-1]);
console.log(arr[arr.length-1].name);