import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SearchArtist } from './search-artist/search-artist';
import { NotFound } from './not-found/not-found';
import { Artist } from './artist/artist';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "search-artist", component: SearchArtist},
    {path: "artist/:id", component: Artist},
    {path: "**", component: NotFound}   // tutti gli altri percorsi
];
