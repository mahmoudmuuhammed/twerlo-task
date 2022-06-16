import mongoose from 'mongoose';
import config from '../config';


export default async () => {
    return await mongoose.connect(`mongodb://${config.db.username}:${config.db.password}@${config.db.ip}:${config.db.port}/`);
}