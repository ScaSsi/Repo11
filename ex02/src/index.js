var myStr = "Paragon is the best!";
function useMethods(str) {
    var myReverse = str.split("");
    myReverse = myReverse.reverse();
    myReverse = myReverse.join('');
    var countCharacters = myReverse.split(" ").map(x => x.length);
    return {myReverse, countCharacters}

}

useMethods(myStr);
console.log(useMethods(myStr));
module.exports = useMethods;