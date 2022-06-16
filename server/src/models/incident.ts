import mongoose from 'mongoose';


const Incident = new mongoose.Schema({
    type: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    resolved: {
        type: Boolean
    },
    createdAt: {
        type: Number
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
        }
    }
});