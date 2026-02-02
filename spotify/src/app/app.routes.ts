import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SearchArtist } from './search-artist/search-artist';
import { NotFound } from './not-found/not-found';
import { Artist } from './artist/artist';
import { AlbumDetails } from './album-details/album-details';
import { Login } from './login/login';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "search-artist", component: SearchArtist},
    {path: "artist/:id", component: Artist},
    {path: "album/:id", component: AlbumDetails},
    {path: "login", component: Login},
    {path: "**", component: NotFound}   // tutti gli altri percorsi
];
