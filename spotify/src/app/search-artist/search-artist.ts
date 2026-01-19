import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { SpotifyService } from '../spotify-service';
import { ISearchedArtists, Item } from '../interfaces/i-searched-artists';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-artist',
  imports: [ReactiveFormsModule, RouterLink],   // 2-way binding per form
  templateUrl: './search-artist.html',
  styleUrl: './search-artist.css',
})
export class SearchArtist implements OnInit {

  // inietto il servizio
  spotifyService: SpotifyService = inject(SpotifyService);

  artisti: WritableSignal<Item[]> = signal([]);

  // gestione di un input tag HTML lato Typescript
  inputName: FormControl = new FormControl();

  search(name: string) {

    this.spotifyService.searchArtist(name).subscribe((dati : ISearchedArtists) => {
      console.log(dati);
      this.artisti.set(dati.artists.items);
    })
  }

  ngOnInit(): void {
    this.inputName.valueChanges.pipe(
      // ignoro le richieste durante la digitazione (<300ms)
      debounceTime(300),
      // ignoro le richieste uguali alla precedente
      distinctUntilChanged(),
      // scarta le vecchie risposte e tiene solo la più recente
      switchMap((nome: string) => {
        if (nome.length > 0) {
          return this.spotifyService.searchArtist(nome);
        }
        else {
          return of(null);
        }
      })
    )
    .subscribe((dati: ISearchedArtists | null) => {
      this.artisti.set(dati?.artists?.items ? dati.artists.items : []);
    })
  }
}
