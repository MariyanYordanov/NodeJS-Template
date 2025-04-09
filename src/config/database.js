const mongoose = require('mongoose');
require('../models/User');
require('../models/Data');
//TODO Change name to template database

async function configDatabase() {
    const connectionString = 'mongodb://localhost:27017/exam_db';
    await mongoose.connect(connectionString);
    mongoose.connection.on('error', (err) => {
        console.error('Database connection error:', err);
    });
    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    }); 
    console.log('Database connected');
}

module.exports = { configDatabase };