import { Router } from 'express';
import { Container } from 'typedi';
import { AuthService } from '../../services/auth';
import { ISigninDTO, ISignupDTO } from '../../interfaces/user';


export default (app: Router) => {
    const route = Router();

    app.use('/auth', route);


    route.post('/signup', async (req, res, next) => {
        try {
            const authService = Container.get(AuthService);

            const response = await authService.signup(req.body as ISignupDTO);

            res.status(201).send(response);
        } catch(error) {
            console.log(error);
            return next(error);
        }
    });

    route.post('/signin', async (req, res, next) => {
        try {
            const authService = Container.get(AuthService);
            const response = await authService.signin(req.body as ISigninDTO);

            res.status(200).send(response);
        } catch(error) {
            console.log(error);
            return next(error);
        }
    });
}