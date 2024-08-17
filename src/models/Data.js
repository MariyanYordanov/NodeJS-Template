const { Schema, model, Types } = require('mongoose');
// TODO add/change properties (unique, required, etc.)

const dataSchema = new Schema({
    prop: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
    owner: { type: Types.ObjectId, ref: 'User' }
});

const Data = model('Data', dataSchema);

module.exports = { Data };