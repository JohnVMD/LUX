import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Recommend } from './components/recommend/recommend';

export const routes: Routes = [
    { path: '', component: Home, title: 'Home'},
    { path: 'about', component: About, title: 'About'},
    { path: 'projects', component: Projects, title: 'Projects'},
    { path: 'recommend', component: Recommend, title: 'Recommendations'}
];