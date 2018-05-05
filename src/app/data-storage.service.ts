import {Injectable} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {Http} from '@angular/http';
import {User} from './user.model';
import {UsersService} from './users.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
              private authenticationService: AuthenticationService,
              private usersService: UsersService) {
  }

  storeUsers() {
    const token = this.authenticationService.getToken();

    return this.http.put('https://ng-telekocsi.firebaseio.com/users.json?=auth' + token, this.usersService.getUsers());
  }

  storeUser(user: User) {
    const token = this.authenticationService.getToken();

    return this.http.put('https://ng-telekocsi.firebaseio.com/users.json?=auth' + token, user);
  }
}
