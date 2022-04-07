var myArr = [2, 4, 0, 8, 10];

function myArrayFunction(myItems) {
    myItems[2] = 6;
    return myItems;
}
myArrayFunction(myArr);
console.log(myArrayFunction(myArr));
module.exports = myArrayFunction;
