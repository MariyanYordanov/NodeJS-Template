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
    collation: {
        locale: 'en', 
        strength: 2 
    }
}); 

const User = model('User', userSchema);

module.exports = { User };