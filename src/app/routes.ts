import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';

const routes: Routes = [
  { path: '', component: About },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
];