import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { IToken } from './interfaces/i-token';
import { interval, Observable } from 'rxjs';
import { ISearchedArtists } from './interfaces/i-searched-artists';

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
    'https://accounts.spotify.com/api/token',
    'https://api.spotify.com/v1/search?q='
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
    this.httpClient.post<IToken>(this.urls[0], httpParams.toString(), { headers: httpHeader })
      .subscribe((token: IToken) => {
        this._token = token;
        console.log(this._token);

        // quando scade la validità, richiedo un nuovo token
        interval(this._token.expires_in * 1000).subscribe(() => {
          this.httpClient.post<IToken>(this.urls[0], httpParams.toString(), { headers: httpHeader })
            .subscribe((token: IToken) => {
              this._token = token;
            })
        })
      });
  }

  searchArtist(name: string): Observable<ISearchedArtists> {
    let url = `${this.urls[1]}${name}&type=artist`; // stringa con placeholder
    let httpHeader = new HttpHeaders().set('Authorization', this._token.token_type + ' ' + this._token.access_token);

    return this.httpClient.get<ISearchedArtists>(url, { headers: httpHeader });
  }
}
