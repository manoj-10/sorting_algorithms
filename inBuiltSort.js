
let arr = [1,3,2,4,0,10,20,30,100];

function compare(a,b){
    if(a<b){
        return -1;
    }
    else if(b<a){
        return 1;
    }
    else{
        return 0;
    }
}

function compareDecreasing(a,b){
    if(a>b){
        return -1;
    }
    else if(b>a){
        return 1;
    }
    else{
        return 0;
    }
}

arr.sort(compare);

console.log(arr);