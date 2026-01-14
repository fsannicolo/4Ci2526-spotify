import { Component, inject, signal, WritableSignal } from '@angular/core';
import { SpotifyService } from '../spotify-service';
import { ISearchedArtists, Item } from '../interfaces/i-searched-artists';

@Component({
  selector: 'app-search-artist',
  imports: [],
  templateUrl: './search-artist.html',
  styleUrl: './search-artist.css',
})
export class SearchArtist {

  // inietto il servizio
  spotifyService: SpotifyService = inject(SpotifyService);

  artisti: WritableSignal<Item[]> = signal([]);

  search(name: string) {

    this.spotifyService.searchArtist(name).subscribe((dati : ISearchedArtists) => {
      console.log(dati);
      this.artisti.set(dati.artists.items);
    })
  }
}
