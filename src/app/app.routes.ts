import { Routes } from '@angular/router';
import { ProdListComponent } from './components/prod-list/prod-list.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'allTab', component: ProdListComponent },
    { path: 'home', component: HomeComponent },

    
    { path: '', redirectTo: '/home', pathMatch: 'full' }  // Default route
  ];
