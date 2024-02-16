export class Post {
    id: number;
    content: string;
    user_id: number;
    hidden: boolean;
    constructor( id:number, content:string, user_id:number) {
        this.id = id;
        this.content = content;
        this.user_id = user_id;
        this.hidden = false;
    }
}

module.exports = Post;
