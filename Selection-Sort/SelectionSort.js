
let arr = ["england", "china", "bangladesh", "america", "dubai"];

function findMin(arr, startIndex){
    let minIndexTillNow = startIndex;
    for(let i = startIndex; i < arr.length; i++){
        if(arr[minIndexTillNow] > arr[i]){
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