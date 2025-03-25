import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    { path: 'homepage', component: HomepageComponent },
    { path: '', redirectTo: '/homepage', pathMatch: 'full' }, // Default route
];
