const mongo = () => {
    const mongoose = require('mongoose');
    const { MONGO_URI } = require('./config');

    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to DB.'))
        .catch(err => console.log(err));
}

module.exports = mongo;