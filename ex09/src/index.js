function myMutation(arr) {
    var temp = arr[1].toLowerCase().split("");
    for(var i=0; i<temp.length; i++) {
        if(!arr[0].toLowerCase().includes(temp[i])) return false;
    }
    return true;
}
console.log(myMutation(["hello", "hey"]))
console.log(myMutation(["hello", "Hello"]))
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))
console.log(myMutation(["Mary", "Army"]))
console.log(myMutation(["Mary", "Aarmy"]))
console.log(myMutation(["Alien", "line"]))
console.log(myMutation(["floor", "for"]))
console.log(myMutation(["hello", "neo"]))
console.log(myMutation(["voodoo", "no"]))
console.log(myMutation(["ate", "date"]))
console.log(myMutation(["Tiger", "Zebra"]))
console.log(myMutation(["Noel", "Ole"]))

module.exports = myMutation;