
function binarySearch(arr, numberToSort){
    let start = 0;
    let end = arr.length-1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] === numberToSort){
            //found the answer
            return mid;
        }
        else if(numberToSort < arr[mid]){
            //go to left side arr
            end = mid-1;
        }
        else{
            //go to right side arr
            start = mid+1;
        }
    }
    return -1;
}

console.log(binarySearch([2,3,4,7,8,10,20,30],8));
console.log(binarySearch([2,3,5,7,10,20,30],10));
console.log(binarySearch([2,3,5,7,10,20,30],20));
