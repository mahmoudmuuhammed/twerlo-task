import { BaseError } from "./base-error";

export class BadRequestError extends BaseError {
    statusCode: number = 400;
    constructor(public message: string) {
        super(message);
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    serializeError(): { message: string; field?: string | undefined; }[] {
        return [{ message: this.message }];
    }
}