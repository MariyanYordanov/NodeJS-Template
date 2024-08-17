const mongoose = require('mongoose');
require('../models/User');
require('../models/Data');//TODO Change name to template database

async function configDatabase() {
    const connectionString = 'mongodb://localhost:27017/softuni-exam';
    await mongoose.connect(connectionString);
    console.log('Database connected');
}

module.exports = { configDatabase };