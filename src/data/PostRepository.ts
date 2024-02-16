import { User } from '../core/user'; 
import { Post } from '../core/post';
export class PostRepository {
    static Posts: Post[] = [
        { id: 1, user_id: 1, content: 'Lorem ipsum dolor sit amet.', hidden: false },
        { id: 2, user_id: 1, content: 'Consectetur adipiscing elit.', hidden: true },
        { id: 3, user_id: 1, content: 'Sed do eiusmod tempor incididunt.', hidden: false },
        { id: 4, user_id: 2, content: 'Ut labore et dolore magna aliqua.', hidden: true },
        { id: 5, user_id: 3, content: 'Ut enim ad minim veniam.', hidden: false }
    ];


  constructor() {
 
  }

  addpost(post: Post): void { 
    PostRepository.Posts.push(post);
  }

  getposts(): Post[] { 
    return PostRepository.Posts;
  }

remove(id: number): Post[] { 
    PostRepository.Posts = PostRepository.Posts.filter(post => post.id !== id);
    return PostRepository.Posts;
}
}
