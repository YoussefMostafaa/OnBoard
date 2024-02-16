import { Post } from "../../core/post";
import { PostRepository } from "../../data/PostRepository";
import { UseCase } from "../base/usecase"; 
import { AddPostRequest } from "./add-post.request";
export class AddPostUseCase implements UseCase<AddPostRequest, void> { 
    database: PostRepository;
    constructor(database: PostRepository) {
        this.database = database;
    }

    async execute(body: AddPostRequest): Promise<void> {
        const p = new Post((this.database.getposts().length + 1), body.content, body.user_id);
        this.database.addpost(p);
    }
}