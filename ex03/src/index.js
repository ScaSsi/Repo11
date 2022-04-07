var myPetsArray = ["Dog", "Cat"];
function myArrayFunction(myPets) {
    var myNewPets = myPetsArray;
    for(var i=0; i<myPets.length; i++) myNewPets.push(myPets[i]);
    var firstPet = myNewPets.shift();
    var lastPet = myNewPets.pop();
    //console.log(firstPet + " " + lastPet);
    myNewPets.unshift("Lion");
    return myNewPets;
}

console.log(myArrayFunction(["Bird", "Fish"]));
module.exports = myArrayFunction;