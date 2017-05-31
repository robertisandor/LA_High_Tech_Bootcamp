var mongoose = require('mongoose');
mongoose.connect('mongodb://' + process.env.IP + '/cat_app');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    var catSchema = mongoose.Schema({
        name: String,
        age: Number,
        breed: String
    });
    
    var Cat = mongoose.model('Cat', catSchema);
    // var gato = new Cat(
    //     {
    //         name: 'George',
    //         age: 11,
    //         breed: 'Russian Blue'
    //     }
    // );
    
    // gato.save(function(err, gato) {
    //   if (err) {
    //       return console.error(err);
    //   }
    //   console.log("gato was successfully saved!")
    // });
    // Cat.create([
    //     { name: "Puss-in-Boots", age: 6, breed: "orange tabby" }, 
    //     { name: "Frida Tux", age: 7, breed: "american short hair" }
    // ], function(err, cats) {
    //     if (err) {
    //         return handleError(err);
    //     }    
    //     console.log("The cats were successfully created!")
    // });
    Cat.find(function(err, cats) {
        if (err) {
            return console.error(err);
        }
        console.log(cats);
    });
});