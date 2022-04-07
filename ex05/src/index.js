var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(arr) {
    var monitorsList = new Array(arr.length);
    for(var i=0; i<arr.length; i++) {
        monitorsList[i] = [];
        monitorsList[i].push(arr[i])
        monitorsList[i].push(i+1);
    }
    return monitorsList;
}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;

