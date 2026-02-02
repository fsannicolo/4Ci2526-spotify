import { Component, signal } from '@angular/core';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginData = signal({
    username: "",
    password: ""
  })

  loginForm = form(this.loginData);
}
