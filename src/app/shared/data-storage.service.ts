import {Injectable} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {Http} from '@angular/http';
import {UsersService} from '../profile/users.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
              private authenticationService: AuthenticationService,
              private usersService: UsersService) {
  }

  storeUsers() {
    const token = this.authenticationService.getToken();

    console.log(this.usersService.getUsers());
    return this.http.put('https://ng-telekocsi.firebaseio.com/users.json?=auth' + token, this.usersService.getUsers());
  }
}
