import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {NgForm} from '@angular/forms';
import {User} from '../user.model';
import {DataStorageService} from '../data-storage.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password
    this.authenticationService.signupUser(email, password);
    // this.dataStorageService.storeUser(registerUser)
    //   .subscribe(
    //     (response: Response) => {
    //       console.log(response);
    //     }
    //   );
  }

}
