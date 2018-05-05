import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from './shared/authentication.service';
import {UsersService} from './profile/users.service';
import {DataStorageService} from './shared/data-storage.service';
import {HttpModule} from '@angular/http';
import {DropdownDirective} from './shared/dropdown.directive';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent,
    LoginComponent,
    RegistrationComponent,
    DropdownDirective,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthenticationService, UsersService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
