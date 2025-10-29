import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: "Home"
    },
    {
        path: 'app-about',
        component: About,
        title: 'About'
    }
];