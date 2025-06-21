import { Component } from '@angular/core';
import { AboutmeComponent } from '../components/aboutme/aboutme.component';
import { EducationComponent } from '../components/education/education.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { LanderComponent } from '../lander/lander.component';

@Component({
  selector: 'app-home',
  imports: [ LanderComponent ,AboutmeComponent, EducationComponent, ExperienceComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}