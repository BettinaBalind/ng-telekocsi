import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';
import {NgForm} from '@angular/forms';
import {User} from '../profile/user.model';
import {DataStorageService} from '../shared/data-storage.service';
import {UsersService} from '../profile/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private usersService: UsersService,
              private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    const registerUser: User = new User(
      form.value.firstName,
        form.value.lastName,
        form.value.email,
        form.value.password,
        form.value.city);

    this.authenticationService.signupUser(registerUser.email, registerUser.password);
    this.usersService.addUser(registerUser);
    this.dataStorageService.storeUsers()
      .subscribe((response)  => {
        console.log(response);
      });
  }

}
