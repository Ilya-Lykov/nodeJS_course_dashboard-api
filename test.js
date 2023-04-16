var universalID = 5;
console.log(universalID);
printId(universalID);
universalID = "sdf";
printId(universalID);
function printId(id) {
    if (typeof id == "number") {
        console.log("Number:" + id);
    }
    else {
        console.log(id.toUpperCase());
    }
}
