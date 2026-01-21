import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify-service';
import { IArtist } from '../interfaces/i-artist';

@Component({
  selector: 'app-artist',
  imports: [],
  templateUrl: './artist.html',
  styleUrl: './artist.css',
})
export class Artist implements OnInit {
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private spotifyService: SpotifyService = inject(SpotifyService);

  artist: WritableSignal<IArtist | null> = signal(null);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(urlParams => {
      let id: string = urlParams['id'];
      this.spotifyService.getArtist(id).subscribe((dati: IArtist) => {
        this.artist.set(dati);
      })
    })
  }

  get genres(): string {
    return this.artist()!.genres.join(', ');
  }
}
