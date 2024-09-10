const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ['resolved', 'unresolved'], default: 'unresolved' }
}, { timestamps: true });

const Query = mongoose.model('Query', querySchema);
module.exports = Query;
