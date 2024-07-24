function maxProfit(arr){
    let minPrice = findMinNumber(arr)
    let maxProfit = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > minPrice){
            maxProfit = Math.max(maxProfit, arr[i] - minPrice);
        } else {
            minPrice = arr[i];
        }
    }
    return maxProfit;
}

function findMinNumber(arr){
    let min = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));