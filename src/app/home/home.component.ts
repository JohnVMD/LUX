import { Component } from '@angular/core';
import { AboutmeComponent } from '../components/aboutme/aboutme.component';

@Component({
  selector: 'app-home',
  imports: [ AboutmeComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}