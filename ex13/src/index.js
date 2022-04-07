var str = "Paragon!";
function myReverse(str) {
    var reverse = ""
    for(var i=str.length-1; i>=0; i--) {
        reverse += str[i];
    }
    return reverse;
}

console.log(myReverse(str));
module.exports = myReverse;