//Making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "LARGE"; }
    if (printMessage === void 0) { printMessage = "ANY ONE THERE?"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " print on shirt"));
}
//Calling a function with by - defualts values
make_shirt();
//Calling a function now Medium size shirt and defualt massage
make_shirt("MEDIUM");
//Calling function now with small size and different print message
make_shirt("SMALL", "ANY ONE THERE?");
