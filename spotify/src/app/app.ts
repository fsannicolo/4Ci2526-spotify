import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { SpotifyService } from './spotify-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  
  spotifyService: SpotifyService = inject(SpotifyService);
  
  ngOnInit(): void {
    this.spotifyService.getToken();
  }
}
