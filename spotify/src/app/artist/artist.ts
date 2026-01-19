import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify-service';

@Component({
  selector: 'app-artist',
  imports: [],
  templateUrl: './artist.html',
  styleUrl: './artist.css',
})
export class Artist implements OnInit {
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private spotifyService: SpotifyService = inject(SpotifyService);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(urlParams => {
      let id: string = urlParams['id'];
      console.log(urlParams);
    })
  }
}
