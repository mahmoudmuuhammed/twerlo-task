import dotenv from 'dotenv';

// load the .env file
dotenv.config();

// here the configration of the app
export default {
    port: parseInt(process.env.PORT!, 10),
    api: {
        prefix: '/api'
    },
    db: {
        username: process.env.DB_USERNAME!,
        password: process.env.DB_PASSWORD!,
        ip: process.env.DB_IP! || "mongo",
        port: process.env.DB_PORT! || 27017
    },
    jwtSecret: 'thisastrongsecret'
}