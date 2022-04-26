
function binarySearch(arr, numberToSort){
    let start = 0;
    let end = arr.length-1;
    let bestIndexTillNow = -1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] === numberToSort){
            //found the answer
            bestIndexTillNow = mid;
            end = mid-1;
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
    return bestIndexTillNow;
}

console.log(binarySearch([1,1,2,2,2,2,4,4],4));

