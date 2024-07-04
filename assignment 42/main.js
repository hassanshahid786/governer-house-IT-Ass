//Define a function to print each magician name of array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Function to make magician great through .map() it will modify array 
function make_great(magicain) {
    return magicians_names.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of magician names
var magicians_names = ["DEVID GARCIA", "BRIAN DEVIS", "LARRY GREY"];
//Call make_great function to modify maigicians
var great_magicians = make_great(magicians_names);
//Call show _magician that show modified list of magicians
show_magicians(great_magicians);
