const { User } = require('../models/User');
const bcrypt = require('bcrypt');

async function register(email, password) {
    
    const user = await User.findOne({ email });

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

async function login(email, password) {

    const user = await User.findOne({ email });
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