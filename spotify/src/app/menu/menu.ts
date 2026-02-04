import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SpotifyService } from '../spotify-service';
import { UsersService } from '../users-service';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],    // gestione pagine per app SPA
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  spotifyService: SpotifyService = inject(SpotifyService);
  usersService: UsersService = inject(UsersService);
}
