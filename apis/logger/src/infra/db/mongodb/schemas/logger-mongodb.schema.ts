import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    origin: { type: String, required: true },
    key: { type: String, required: true },
    request: { type: String, required: true },
    response: { type: String },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
});

schema.index({ origin: 1 });
schema.index({ key: 1 });
schema.index({ createdAt: 1 });
schema.index({ updatedAt: 1 });

const LoggerSchema = mongoose.model('logger', schema, 'loggers');

LoggerSchema.createIndexes().then((res) => res);

LoggerSchema.on('index', (e) => {
    if (e) console.log(e);
});

export { LoggerSchema };
