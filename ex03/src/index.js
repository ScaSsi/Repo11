var myPetsArray = ["Dog", "Cat"];
function myArrayFunction(myPets) {
    var myNewPets = myPetsArray;
    for(var i=0; i<myPets.length; i++) myNewPets.push(myPets[i]);
    var firstPet = myNewPets[0];
    var lastPet = myNewPets[myNewPets.length - 1];
    myNewPets.shift();
    myNewPets.unshift("Lion");
    myNewPets.pop();
    return myNewPets;
}

console.log(myArrayFunction(["Bird", "Fish"]));
module.exports = myArrayFunction;