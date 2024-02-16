import { User } from "../../../core/user";
import { UserRepository } from "../../../data/UserRepository";
import { UseCase } from "../../base/usecase"; 
import { LogoutUserRequest } from "./logout-user.request"; 
import { Secret, decode, verify,sign } from 'jsonwebtoken';

export class LogoutUserUseCase implements UseCase<LogoutUserRequest, void> { 
    database: UserRepository;
    constructor(database: UserRepository) {
        this.database = database;
    }

    async execute(body: LogoutUserRequest): Promise<void> {
        const token = body.req.cookies.jwt;
        if (!token){
            return body.res.status(400).json({error:"You're Not Signed in to Logout !!"});
        } else {
            body.res.clearCookie('jwt');
            return body.res.status(200).json({error : "Successfully Logged Out "})};

        


    }
}