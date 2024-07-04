//Define Veriables:
let toyota = "toyota";
let uppercasetoyota = "toyota";
let fifty = 50;
let thirty = 30;
let brands = ["apple", "lg", "hp", "lenovo", "haier", "honda"];
//Test for the equality and inequality with string:
console.log("\n is toyota is equal to toyota?");
console.log(toyota == "toyota");
console.log("\nis toyota is not equal to toyota?");
console.log(toyota != "toyota");
//Test lowercase function:
console.log("\n is toyota is equal to toyota after conveting Lowercase?");
console.log(uppercasetoyota.toLowerCase() == "toyota");
console.log("\n is toyota is not equal to toyota after converting Lowercase?");
console.log(uppercasetoyota.toLowerCase() != "toyota");
//Numerical test:
//Equal to:
console.log("\n is fifty is equal to thirty?");
console.log(fifty == thirty);
//Note equal to:
console.log("\n is fifty is not equal to thirty?");
console.log(fifty != thirty);
//Greater than:
console.log("\n is fifty in greater than thirty?");
console.log(fifty > thirty);
// Less than:
console.log("\n is fifty is less than 30?");
console.log(fifty < thirty);
// Greater than equal to:
console.log("\n is fifty is greater then and equal to thirty?");
console.log(fifty >= thirty);
//Less than equal to:
console.log("\n is fifty in less than equal to thirt?");
console.log(fifty <= thirty);
//Test using "and" & "or" operators:
//Using && (and):
console.log("\n fifty is not equal to 30 and thirty is greater than 30?");
console.log(thirty != 50 && fifty > 30);
console.log("\n fifty is not equal to 30 and thirty is greater than 30?");
console.log(fifty != 30 && thirty > 50);
//Using || (OR):
console.log("\n 30 is greater tha 50 or 30 is equal to 30");
console.log(30 > 50 || 30 == 30);
console.log("\n 30 is greater tha 50 or 30 is not equal to 30");
console.log(30 > 50 || 30 != 30);
// Test teather an item is include in array
console.log("\n is haier includes in my brands array");
console.log(brands.includes("haier"));
// Not include
console.log("\n is haier is not includes in my brands array");
console.log(!brands.includes("haier"));
export {};
