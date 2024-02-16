import { User } from "../../../core/user";
import { UserRepository } from "../../../data/UserRepository";
import { UseCase } from "../../base/usecase"; 
import { DeleteUserRequest } from "./delete-user.request";
import { Secret, decode, verify } from 'jsonwebtoken';

export class CreateUserUseCase implements UseCase<DeleteUserRequest, any> { // Use typeof CreateUserRequest
    database: UserRepository;
    constructor(database: UserRepository) {
        this.database = database;
    }

    async execute(body: DeleteUserRequest): Promise<any> {
        try {
                const token = body.req.cookies.jwt;
                verify(token, 'supersecret', async(err: any, decodedToken: any) => {
                    if(err) {
                        return body.res.status(400).json({error : err.message});
                    } else {
                            const username = decodedToken.username;
                            const users = this.database.remove(username);
                            return body.res.status(200).json({remaining_users: users});
                    }
                });
            } catch (error : any) {
                return body.res.status(400).json({error: error.message});
            }
    }
}