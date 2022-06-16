export interface IUser {
    id: string;
    fullName: string;
    identityNo: string;
    password: string;
    createdAt: number;
    role: string;
}

export interface ISignupDTO {
    fullName: IUser['fullName'];
    identityNo: IUser['identityNo'];
    password: IUser['password'];
}

export interface ISigninDTO {
    identityNo: IUser['identityNo'];
    password: IUser['password'];
}