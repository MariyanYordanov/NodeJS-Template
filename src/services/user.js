const { User } = require('../models/User');
const bcrypt = require('bcrypt');

const identityKey = 'email';

async function register(identity, password) {
    
    // { [identityKey]: identity } - dinamically set the key of the object
    const user = await User.findOne({ [identityKey]: identity }); 

    if (user) {
        throw new Error(`This user ${identityKey} is already registered`);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        [identityKey]: identity,
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

module.exports = { register, login, logout };