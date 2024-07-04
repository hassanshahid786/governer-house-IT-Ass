//Define a function to print each magician name of array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Function to make magician great through .map() it will modify array 
function make_great(magicain) {
    return magicians_names.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of magician names
var magicians_names = ["DAVID GARCIA", "BRIAN DEVIS", "LARRY GREY"];
//Making a copy of orignal array through .slice() function
var copy_magicians_name = magicians_names.slice();
//Modify the copied array to include "the great" with thier name
var copy_great_magicians = make_great(copy_magicians_name);
//Show both array orignal and copied
//Orignal
console.log("Orignal Array\n");
show_magicians(magicians_names);
//Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
