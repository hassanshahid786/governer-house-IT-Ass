//Define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
;
//Calling 3 times function and creating 3 variable with different values
var album1 = make_album("Mickel jackson", "Alnum title 1");
var album2 = make_album("Zayn", "Alnum title 2");
//Calling a meke_album function with 3rd parameter
var album3 = make_album("Ali zafar", "Alnum title 3", 10);
//Printing the veriable
console.log(album1);
console.log(album2);
console.log(album3);
