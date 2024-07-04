//Define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Define an array contaning magican name
var magicians_names = ["DAVID GARCIAL", "BRIAN DEVIS", "LARRY GREY"];
//Call the function to print each magician name
show_magicians(magicians_names);
