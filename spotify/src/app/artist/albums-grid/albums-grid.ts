import { Component, input } from '@angular/core';
import { Item } from '../../interfaces/i-album';
import { AlbumCard } from './album-card/album-card';

@Component({
  selector: 'app-albums-grid',
  imports: [AlbumCard],
  templateUrl: './albums-grid.html',
  styleUrl: './albums-grid.css',
})
export class AlbumsGrid {

  albums = input<Item[]>();
}
