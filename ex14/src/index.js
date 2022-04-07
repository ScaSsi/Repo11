var myArr = [2, 5, 9, 8, 1];
function bubbleSort(arr) {
    for(var i=0; i<arr.length-1; i++) {
        for(var j=0; j<arr.length-1-i; j++) {
            if(arr[j+1] < arr[j]) {
                var temp = arr[j+1];
                arr[j+1] = arr[j]
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(myArr));
module.exports = bubbleSort;