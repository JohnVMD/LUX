import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { eventNames } from 'node:process';
import { Home } from './components/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LUX');
}
