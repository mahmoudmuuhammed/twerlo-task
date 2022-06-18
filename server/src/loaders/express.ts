import express from 'express';
import cors from 'cors';
import config from '../config';
import appRoutes from '../api/routes';
import errorHandler from '../api/middlewares/error-handler';


export default ({ app }: { app: express.Application }) => {
    // health check endpoint
    app.get('/status', (_, res) => {
        res.status(200).send('<h1>Server is working</h1>')
    });

    app.use(cors());

    app.use(express.json());

    app.use(config.api.prefix, appRoutes());

    app.use(errorHandler);
}