import { Request, Response, NextFunction } from 'express';
import { BaseError } from '../errors/base-error';



export default (error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof BaseError) {
        return res.status(error.statusCode).send({errors: error.serializeError()});
    }

    return res.status(400).send({
        errors: [{ message: error.message }]
    });
}