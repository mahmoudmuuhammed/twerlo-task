import { Inject, Service } from "typedi";
import { ISignupDTO, ISigninDTO, IUser } from '../interfaces/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';


@Service()
export class AuthService {
    constructor(@Inject('userModel') private userModel: Models.UserModel) {}


    async signup(signupDto: ISignupDTO) {
        try {
            const checkUser = await this.userModel.findOne({ identityNo: signupDto.identityNo });

            if(checkUser) {
                throw new Error('This user already exist');
            }

            const password = await this.hashPassword(signupDto.password);

            const role = await this.userModel.countDocuments() === 0 ? 'Admin' : 'User';

            const user = await this.userModel.create({
                ...signupDto,
                password,
                role
            });

            const token = this.generateToken(user);

            const record = await user.save();

            return { record, token };

        } catch(error) {
            console.log(error);
        }
    }

    async signin(signinDto: ISigninDTO) {
        try {
            const userRecord = await this.userModel.findOne({ identityNo: signinDto.identityNo });

            if(!userRecord) {
                throw new Error('Identity no or password incorrect');
            }

            const validatePassword = await this.comparePassword(signinDto.password, userRecord.password);

            if(!validatePassword) {
                throw new Error('Identity no or password incorrect');
            }

            const token = this.generateToken(userRecord);

            return { userRecord, token };

        } catch(error) {
            console.log(error);
        }
    }

    // helpers methods ...
    private hashPassword(password: string) {
        return bcrypt.hash(password, 8);
    }

    private comparePassword(password: string, hashed: string) {
        return bcrypt.compare(password, hashed);
    }

    private generateToken({ id, role, fullName }: IUser) {
        const today = new Date();
        const exp = new Date(today);
        exp.setDate(today.getDate() + 60);

        return jwt.sign(
            {
                id,
                role,
                fullName,
                exp: exp.getTime() / 1000
            },
            config.jwtSecret
        );
    }
}