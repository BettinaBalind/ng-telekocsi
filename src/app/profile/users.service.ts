import {User} from './user.model';
import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';

@Injectable()
export class UsersService {
  usersChanged = new Subject<User[]>();

  private users: User[] = [
    new User('teszt', 'teszt', 'valami@az.com', 'valami', 'Szeged')
  ];

  getUsers() {
    return this.users.slice();
  }

  addUser(user: User) {
    this.users.push(user);
    this.usersChanged.next(this.users.slice());
  }
}
