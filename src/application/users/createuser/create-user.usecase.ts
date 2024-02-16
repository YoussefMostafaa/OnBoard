import { User } from "../../../core/user";
import { UserRepository } from "../../../data/UserRepository";
import { UseCase } from "../../base/usecase"; 
import { CreateUserRequest } from "./create-user.request"; 

export class CreateUserUseCase implements UseCase<CreateUserRequest, User> { // Use typeof CreateUserRequest
    database: UserRepository;
    constructor(database: UserRepository) {
        this.database = database;
    }

    async execute(body: CreateUserRequest): Promise<User> {
        const user = new User((this.database.getusers().length + 1), body.username, body.password);
        this.database.save(user);
        return user;
    }
}