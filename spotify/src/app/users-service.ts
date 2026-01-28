import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { IUser } from './interfaces/i-user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  httpClient: HttpClient = inject(HttpClient);

  // dati dell'utente ricevuti dal server di autenticazione 
  private _userData: WritableSignal<IUser | null> = signal<IUser | null>(null);
  userData: Signal<IUser | null> = this._userData.asReadonly();

  private _isLogged: WritableSignal<boolean> = signal(false);
  isLogged: Signal<boolean> = this._isLogged.asReadonly();

  private _loginError: WritableSignal<boolean> = signal(false);
  loginError: Signal<boolean> = this._loginError.asReadonly();

  private url: string = 'https://dummyjson.com/user/login';

  login(userName: string, password: string): void {
    let httpHeader = new HttpHeaders().set('Content-Type', 'application/json');
    
    let user: any = {
      username: userName,
      password: password
    }

    // TODO
    this.httpClient.post(this.url, user, {headers: httpHeader}).subscribe();
  }

  logout(): void {
    this._isLogged.set(false);
    this._userData.set(null);
  }
}
