import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { IToken } from './interfaces/i-token';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  
  // Dependency Injection
  // httpClient inizializzato come istanza della classe HttpClient creata all'avvio
  httpClient: HttpClient = inject(HttpClient);

  private client_id: string = '17ec561e961c4ad2b11a5285ce1b0cdf';
  private client_secret: string = 'b8c0aefe05c749dfa6e7e1d185c3dbdf';
  private urls: string[] = [
    'https://accounts.spotify.com/api/token'
  ];

  // ! operatore asserzione tipo non nullo
  private _token!: IToken;

  public getToken(): void {
    // header della richiesta
    let httpHeader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    // body della richiesta
    let httpParams = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', this.client_id)
      .set('client_secret', this.client_secret);

    // attendo ricezione asincrona dei dati
    this.httpClient.post<IToken>(this.urls[0], httpParams.toString(), {headers: httpHeader})
      .subscribe((token: IToken) => {
        this._token = token;
      });
  }
}
