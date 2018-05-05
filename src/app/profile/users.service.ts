import {User} from './user.model';
import {Subject} from 'rxjs/Subject';

export class UsersService {
  usersChanged = new Subject<User[]>();

  private users: User[] = [
    new User('teszt', 'valami@az.com', 'valami', 'Szeged')
  ];

  getUser(index: number) {
    return this.users[index];
  }

  getUsers() {
    return this.users.slice();
  }

  addUser(user: User) {
    this.users.push(user);
    this.usersChanged.next(this.users.slice());
  }
}
