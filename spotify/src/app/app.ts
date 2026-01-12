import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
