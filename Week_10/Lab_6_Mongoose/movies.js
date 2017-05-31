var mongoose = require('mongoose');
mongoose.connect('mongodb://' + process.env.IP + '/movies_app')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    var movieSchema = mongoose.Schema({
        title: String,
        year: Number,
        director: [String],
        actors: [String],
        plot: String
    });

    var Movie = mongoose.model('Movie', movieSchema);
    // Movie.create([{
    //     title: "John Wick",
    //     year: 2014,
    //     director: [
    //         "Chad Stahelski",
    //         "David Leitch"
    //     ],
    //     actors: [
    //         "Keanu Reeves",
    //         "Michael Nyqvist",
    //         "Alfie Allen",
    //         "Willem Dafoe"
    //     ]
    // }, {
    //     title: "The Hobbit: An Unexpected Journey",
    //     year: 2012,
    //     director: "Peter Jackson",
    //     actors: [
    //         "Ian McKellen",
    //         "Martin Freeman",
    //         "Richard Armitage",
    //         "Ken Stott"
    //     ]
    // }, {
    //     title: "Independence Day",
    //     year: 1996,
    //     director: "Roland Emmerich",
    //     actors: [
    //         "Will Smith",
    //         "Bill Pullman",
    //         "Jeff Goldblum",
    //         "Mary McDonnell"
    //     ]
    // }, {
    //     title: "Home Alone",
    //     year: 1990,
    //     director: "Chris Columbus",
    //     actors: [
    //         "Macaulay Culkin",
    //         "Daniel Stern",
    //         "John Heard"
    //     ]
    // }, {
    //     title: "Men in Black",
    //     year: 1997,
    //     director: "Barry Sonnenfeld:",
    //     actors: [
    //         "Will Smith",
    //         "Tommy Lee Jones",
    //         "Linda Fiorentino",
    //         "Vincent D'Onofrio"
    //     ]
    // }, {
    //     title: "Inception",
    //     year: 2010,
    //     director: "Christopher Nolan",
    //     actors: [
    //         "Leonardo DiCaprio",
    //         "Joseph Gordon-Levitt",
    //         "Ellen Page",
    //         "Tom Hardy"
    //     ]
    // }, function(err, contacts) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log(contacts);
    // }]);

    // Movie.find({}, function(err, contacts) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log(contacts);
    // });

    // Movie.find({"director": "Christopher Nolan"}, function(err, contacts) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log(contacts);
    // });

    // Movie.find({
    //     "actors": "Will Smith"
    // }, function(err, contacts) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log(contacts);
    // });

    // Movie.find({
    //     $and: [{
    //         "year": {
    //             $gte: 1990
    //         }
    //     }, {
    //         "year": {
    //             $lt: 2000
    //         }
    //     }]
    // }, function(err, contacts) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log(contacts);
    // });

    // Movie.find({
    //     "year": {
    //         $gt: 2010
    //     }
    // }, function(err, contacts) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log(contacts);
    // });

    // Movie.update({
    //     "title": "Home Alone"
    // }, {
    //     $addToSet: {
    //         actors: "Joe Pesci"
    //     }
    // }, function(err, contacts) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log(contacts);
    // });

    // Movie.find({"title": "Home Alone"}, function(err, contacts) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(contacts);
    // });


    // when adding a new field to a document,
    // update the schema
    
    // Movie.update({
    //         "title": 'Men in Black'
    //     }, {
    //         $set: {
    //             "plot": "A police officer joins a secret organization that polices and monitors extraterrestrial interactions on Earth."
    //         }
    //     }, {
    //         new: true
    //     },
    //     function(err, movies) {
    //         if (err) {
    //             return console.error(err);
    //         }
    //         console.log(movies);
    //     });

    // Movie.find({}, function(err, movies) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log(movies);
    // })
});