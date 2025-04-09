const { Schema, model } = require('mongoose');

// TODO add/change properties (unique, required, etc.)
const userSchema = new Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
},
{
    collation: {       // to make case-insensitive search
        locale: 'en',  // use US English collation
        strength: 2    // compare base characters only
    }
}); 

const User = model('User', userSchema);

module.exports = { User };