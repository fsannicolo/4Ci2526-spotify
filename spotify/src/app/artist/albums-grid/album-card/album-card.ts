import { Component, input } from '@angular/core';
import { Item } from '../../../interfaces/i-album';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-album-card',
  imports: [RouterLink],
  templateUrl: './album-card.html',
  styleUrl: './album-card.css',
})
export class AlbumCard {

  album = input<Item>();

  get albumImage(): string {
    return this.album()?.images ? this.album()!.images[0].url : 'favicon.ico';
  }
}
