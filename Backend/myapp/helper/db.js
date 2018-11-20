const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://kerem:a123456@ds263571.mlab.com:63571/garsondusmani', { useNewUrlParser: true });//veri tabani adresi 

    mongoose.connection.on('open', () => {
         console.log('MongoDB: Connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });


};
