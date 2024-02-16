import { User } from '../core/user'; 
export class UserRepository {
  static users: User[] = [
    { id: 1 ,username: 'user1', password: 'pass1' },
    { id : 2 ,username: 'user2', password: 'pass2' },
    { id : 3 ,username: 'user3', password: 'pass3' }
  ];

  constructor() {
 
  }

  save(user: User): void { 
    UserRepository.users.push(user);
  }

  getusers(): User[] { 
    return UserRepository.users;
  }

  remove(username: string): User[] { 
    UserRepository.users = UserRepository.users.filter(user => user.username !== username);
    return UserRepository.users;
  }
}
