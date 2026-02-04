import { Component, inject, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { UsersService } from '../users-service';

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginData = signal({
    username: "",
    password: ""
  })

  usersService: UsersService = inject(UsersService);
  loginError = this.usersService.loginError;

  loginForm = form(this.loginData, (schemaPath) => {
    // validation
    required(schemaPath.username, {message: 'Username obbligatorio'});
    required(schemaPath.password, {message: 'Password obbligatoria'});
  });

  login(eventData: any): void {
    eventData.preventDefault();
    this.usersService.login(this.loginData().username, this.loginData().password);
  }
}
