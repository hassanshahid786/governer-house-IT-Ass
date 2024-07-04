//Define a function with a rest parameter that accept items arguments representing our sandwich
function makeSandwich(...items: string[]){
    console.log("\Making a sandwich with the following items: \n");

    items.forEach(singleItems => console.log("-" + singleItems));

    console.log("\Now Enjoy Sandwich");

}


//Call the function 3 times with 3 different number of arguments

makeSandwich("cheeze","egg");

makeSandwich("tosted bread","butter"," potato");

makeSandwich("mayo","chicken","tomatoes");




