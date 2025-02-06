const { User } = require('../models/User');
const bcrypt = require('bcrypt');

const identityKey = 'email';

async function register(identity, password) {
    
    const user = await User.findOne({ [identityKey]: identity }); 
    // { [identityKey]: identity } - dinamically set the key of the object

    if (user) {
        throw new Error('Email is already taken');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        email, 
        password: hashedPassword 
    });

    await newUser.save();

    return newUser;
}

async function login(identity, password) {

    const user = await User.findOne({ [identityKey]: identity });
    if (!user) {
        throw new Error('Incorrect username or password');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if(!passwordMatch) {
        throw new Error('Incorrect username or password');
    }
    
    return user;
}

async function logout() {
    res.clearCookie('SESSION_TOKEN');
    return;
}

module.exports = { login, register, logout };