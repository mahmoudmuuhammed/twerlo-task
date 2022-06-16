import Router from 'express';
import authRoutes from './auth';


export default () => {
    const router = Router();

    authRoutes(router);

    return router;
}