// to show all of the mongo databases, type in
// show dbs

var mongoose = require('mongoose');
mongoose.connect('mongodb://' + process.env.IP + '/contacts_app');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    var contactSchema = mongoose.Schema({
        name: String,
        age: Number,
        address: [{
            street: String,
            zip: Number,
            city: String
        }]
    });

    var Contact = mongoose.model('Contact', contactSchema);
    // Contact.create([{
    //     name: "bob",
    //     age: 35,
    //     address: {
    //         street: "6565 sunset blvd",
    //         zip: "90028",
    //         city: "Los Angeles"
    //     }
    // }, {
    //     name: "angela",
    //     age: 25,
    //     address: {
    //         street: "1234 Tropicana blvd",
    //         zip: "89100",
    //         city: "Las Vegas"
    //     }
    // }, {
    //     name: "carol",
    //     age: 52,
    //     address: {
    //         street: "4232 melrose ave",
    //         zip: "90029",
    //         city: "Los Angeles"
    //     }
    // }, {
    //     name: "jack",
    //     age: 63,
    //     address: {
    //         street: "345 Koval ave",
    //         zip: "90105",
    //         city: "Las Vegas"
    //     }
    // }, {
    //     name: "celine",
    //     age: 21,
    //     address: {
    //         street: "20988 5th ave",
    //         zip: "10003",
    //         city: "New York"
    //     }
    // }, {
    //     name: "Luke",
    //     age: 74,
    //     address: {
    //         street: "1344 first street",
    //         zip: "10105",
    //         city: "Bronx"
    //     }
    // }, {
    //     name: "martin",
    //     age: 55,
    //     address: {
    //         street: "7644 66th street",
    //         zip: "10108",
    //         city: "Bronx"
    //     }
    // }], function(err, contacts) {
    //     if (err) {
    //         return handleError(err);
    //     }
    //     console.log(contacts);
    // });
    // Contact.find({ name: "bob" }, function(err, contacts) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log(contacts);
    // });
    
    // Contact.find({ name: "Luke" }, function(err, contacts) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log(contacts);
    // });
    
    // Contact.update({ name: "bob" }, { $set: { "address.$.city": "Chicago"} }, function(err, contacts) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log(contacts);
    // });
    
    // Contact.find({"name": { $regex : "o" } }, function(err, contacts) {
    //     if (err) {
    //         return console.error(err);
    //     } 
    //     console.log(contacts);
    // });
    
    Contact.find({"address.city": { $regex : "o" } }, function(err, contacts) {
       if (err) {
           return console.error(err);
       }
       console.log(contacts);
    });
});