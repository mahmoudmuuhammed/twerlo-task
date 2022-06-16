import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../../config';


export const isAuth = (roles: string[] = []) => {
    if(typeof roles === 'string') {
        roles = [roles]
    }


    return [
        (req: Request, res: Response, next: NextFunction) => {
            if(
                (req.headers.authorization && req.headers.authorization?.split(' ')[0] === 'Token') ||
                (req.headers.authorization && req.headers.authorization?.split(' ')[0] === 'Bearer')
            ) {
                const token = req.headers.authorization.split(' ')[1];

                const payload: any = jwt.verify(token, config.jwtSecret);

                if(roles.length && !roles.includes(payload.role)) {
                    return res.status(401).send({ message: 'Not Authorized' })
                }

                req.currentUser.id = payload.id;
                req.currentUser.role = payload.role;
                
                next();
            }
        }
    ];
}