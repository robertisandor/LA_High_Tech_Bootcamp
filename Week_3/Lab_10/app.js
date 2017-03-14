var Movie = function(title, rating, hasWatched) {
    this.title = title;
    this.rating = rating;
    this.hasWatched = hasWatched;
};

/* is there any reason why I shouldn't make each movie an individual variable
that I add to the array?
var firstMovie = new Movie("Moonlight", 5, true);
var secondMovie = new Movie("La La Land", 4.5, false);
var thirdMovie = new Movie("Rogue One", 5, true);
var fourthMovie = new Movie("Frozen", 3.5, false);
var movies = [firstMovie, secondMovie, thirdMovie, fourthMovie];*/

// is there any way to initialize an array and the objects it contains all at once?
// is that even a good idea?

var arrayOfMovies = [];
arrayOfMovies.push(new Movie("Moonlight", 5, true));
arrayOfMovies.push(new Movie("La La Land", 4.5, false));
arrayOfMovies.push(new Movie("Rogue One", 5, true));
arrayOfMovies.push(new Movie("Frozen", 3.5, false));

var printout = "";
arrayOfMovies.forEach(function(movie) {
    printout += "You have ";
    if (!movie.hasWatched) {
        printout += "not ";
    }
    printout += "seen \"" + movie.title + "\" - " + movie.rating + " stars\n"
});

function showMovies() {
    alert(printout);
}