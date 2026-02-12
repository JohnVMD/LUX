import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Recommend } from './components/recommend/recommend';
import { Prjkts } from './components/prjkts/prjkts';

export const routes: Routes = [
    { path: '', component: Home, title: 'Home'},
    { path: 'prjkts', component: Prjkts, title: 'Projects'},
    { path: 'recommend', component: Recommend, title: 'Recommendations'}
];