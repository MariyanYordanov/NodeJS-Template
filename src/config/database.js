const mongoose = require('mongoose');
require('../models/User');
require('../models/Data');
//TODO Change name to template database

async function configDatabase() {
    const connectionString = 'mongodb://localhost:27017/exam_db';
    await mongoose.connect(connectionString, {
        useNewUrlParser: true,     // to use build-in parser
        useUnifiedTopology: true   // to use build-in connection engine
    });
    console.log('Database connected');
}

module.exports = { configDatabase };