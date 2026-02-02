import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
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

  loginForm = form(this.loginData);

  login(): void {
    this.usersService.login(this.loginData().username, this.loginData().password);
  }
}
