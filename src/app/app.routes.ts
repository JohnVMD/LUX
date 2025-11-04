import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Recommend } from './components/recommend/recommend';

export const routes: Routes = [
    { path: '', component: Home, title: 'Home'},
    { path: 'about', component: About, title: 'About'},
    { path: 'skills', component: Skills, title: 'Skills'},
    { path: 'recommend', component: Recommend, title: 'Recommendations'}
];