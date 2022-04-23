
let arr = [5,2,3,1,4];
let k = 2;

for(let i=0; i<k; i++){
    for(let j=0; j<arr.length-1; j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log(arr[arr.length-k]);