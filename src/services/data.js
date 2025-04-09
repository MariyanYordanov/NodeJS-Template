const { Data } = require('../models/Data');

async function getAll() {
    const data = await Data.find({}).lean();
    return data;
}

async function getById(id) {
    return Data.findById(id).lean();
}

async function create(data, ownerId) {
    // TODO extract properties from viewmodel
    const result = await Data.create({
        prop: data.prop,
        owner: ownerId,
    });
    await result.save();
    return result;
}

async function update(id, data, userId) {
    const record = await Data.findById(id);

    if (!record) {
        throw new ReferenceError('Data not found');
    }

    if (record.owner.toString() !== userId.toString()) {
        throw new Error('Access denied!');
    }

    // TODO replace with real properties
    record.prop = data.prop;

    await record.save();
    return record;
}

async function deleteById(id, userId) {
    const record = await Data.findById(id);

    if (!record) {
        throw new ReferenceError('Data not found');
    }

    if (record.owner.toString() !== userId.toString()) {
        throw new Error('Access denied!');
    }

    await Data.findByIdAndDelete(id); //deleteOne({ _id: id });
    //return record;
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
};