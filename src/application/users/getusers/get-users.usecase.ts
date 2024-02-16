import { User } from "../../../core/user";
import { UserRepository } from "../../../data/UserRepository";
import { UseCase } from "../../base/usecase"; 

export class GetUsersUseCase implements UseCase<void, User[]> { // Use typeof CreateUserRequest
    database: UserRepository;
    constructor(database: UserRepository) {
        this.database = database;
    }

    async execute(): Promise<User[]> {
        return this.database.getusers();
    }
}