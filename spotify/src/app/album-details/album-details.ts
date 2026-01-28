import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { SpotifyService } from '../spotify-service';
import { ActivatedRoute } from '@angular/router';
import { ITracks } from '../interfaces/i-tracks';

@Component({
  selector: 'app-album-details',
  imports: [],
  templateUrl: './album-details.html',
  styleUrl: './album-details.css',
})
export class AlbumDetails implements OnInit {

  spotifyService: SpotifyService = inject(SpotifyService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  tracks: WritableSignal<ITracks | null> = signal(null);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      this.spotifyService.getTracks(id).subscribe((dati: ITracks) => {
        this.tracks.set(dati);
      })     
    })
  }

  get imageName(): string {
    return this.tracks()?.images[0] ? this.tracks()!.images[0].url : 'favicon.ico';
  }

  get artist(): string {
    return this.tracks()?.artists ? this.tracks()!.artists.map(artist => artist.name).join(', ') : '';
  }

  formatDate(date: string): string {
    let d = new Date(date);
    return d.toLocaleDateString();
  }

  trackDuration(durationMs: number): string {
    let duration = durationMs / 1000;
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60 < 10 ? '0' + Math.floor(duration % 60) : Math.floor(duration % 60)
    return minutes + ':' + seconds;
  }
}
