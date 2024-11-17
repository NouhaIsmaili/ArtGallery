import { Routes } from '@angular/router';
import { ProdListComponent } from './components/prod-list/prod-list.component';
import { HomeComponent } from './components/home/home.component';
import { ChangeTableOrderComponent } from './components/userTasks/change-table-order/change-table-order.component';
import { CategoryProdListeComponent } from './components/category-prod-liste/category-prod-liste.component';
import { WishListComponent } from './components/wish-list/wish-list.component';

export const routes: Routes = [
    { path: 'allTab', component: ProdListComponent },
    { path: 'home', component: HomeComponent },
    { path: 'change', component: ChangeTableOrderComponent },
    { path: 'wishList', component: WishListComponent },

    { path:'products/:category', component:CategoryProdListeComponent},
    
    { path: '', redirectTo: '/home', pathMatch: 'full' }  // Default route
  ];
