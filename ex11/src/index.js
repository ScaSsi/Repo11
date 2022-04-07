function mySplice(arr1, arr2, n) {
    var arrNew = [];
    arrNew.push(...arr2);
    var reverse = [];
    reverse.push(...arr1)
    arrNew.splice(n, 0, ...reverse.reverse());
    //console.log(arr1);
    //console.log(arr2);
    return arrNew;
}

console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));
module.exports = mySplice;