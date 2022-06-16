import "reflect-metadata";
import express from 'express';
import config from './config';
import appLoader from './loaders';


// Bootstraping function
async function bootstrap() {
    const app = express();

    await appLoader({ app });

    app.listen(config.port, () => {
        console.log(`🚀 Server is started and listening on port ${config.port}`);
    }).on('error', error => {
        console.log(error);
        process.exit(1);
    });
}


bootstrap();