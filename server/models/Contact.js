// grab the mongoose module
var mongoose = require('mongoose');

module.exports = mongoose.model('Contact', {
    name: {
        title: String,
        first: String,
        last: String
      },
    email: Array,
    phone: {
        home: String,
        work: String,
        mobile: String,
        other: String
    },
    image: String,
    occupation: String,
    relationship: String
});