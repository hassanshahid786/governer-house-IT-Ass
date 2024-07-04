function describe_city(city, country) {
    if (country === void 0) { country = "PAKISTAN"; }
    console.log("".concat(city, " is in ").concat(country));
}
//Calling the function
describe_city("KARACHI");
describe_city("ISLAMABAD");
describe_city("NEVADA", "USA");
