import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
});

schema.index({ email: 1 });
schema.index({ createdAt: 1 });
schema.index({ updatedAt: 1 });

const AccountSchema = mongoose.model('account', schema, 'accounts');

AccountSchema.createIndexes().then((res) => res);

AccountSchema.on('index', (e) => {
    if (e) console.log(e);
});

export { AccountSchema };
