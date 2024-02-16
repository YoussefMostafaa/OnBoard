import { User } from "../../../core/user";
import { UserRepository } from "../../../data/UserRepository";
import { UseCase } from "../../base/usecase"; 
import { LoginUserRequest } from "./login-user.request"; 
import { Secret, decode, verify,sign } from 'jsonwebtoken';

export class LoginUserUseCase implements UseCase<LoginUserRequest, void> { 
    database: UserRepository;
    constructor(database: UserRepository) {
        this.database = database;
    }

    async execute(body: LoginUserRequest): Promise<void> {
        

        const createToken = (data : any) => {
            const Token = () => {
                const maxAge = 3 * 24 * 60 * 60;
                return sign(data, 'supersecret', {
                    expiresIn: maxAge
                });
            }
            return Token();
        };
        let users = this.database.getusers();
        let user = users.find(user => user.username === body.username);
        if (!user) {
            throw new Error("User not found");
        }else
        if(user.password !== body.password) {
            throw new Error("Password is incorrect");
        }
        else
         {
            const tokenData = {
                id: user.id,
                username: user.username,
                password: user.password
            }
            const token = createToken(tokenData);
            const maxAge = 3 * 24 * 60 * 60;
           body.res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge*1000,sameSite: "none", secure: true });
            return body.res.status(200).json({token: tokenData , message: "Login successful"});  
          }



    }
}