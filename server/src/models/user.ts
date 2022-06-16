import mongoose from 'mongoose';
import { IUser } from './../interfaces/user';



const User = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    identityNo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Admin', 'User'],
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        transform(doc, ret) {
            ret.id = doc._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
        }
    }
});


export default mongoose.model<IUser & mongoose.Document>('User', User);