import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],    // gestione pagine per app SPA
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

}
