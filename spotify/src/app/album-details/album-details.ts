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

  trackDuration(durationMs: number): string {
    let duration = durationMs / 1000;
    return Math.floor(duration / 60) + ':' + duration % 60;
  }
}
