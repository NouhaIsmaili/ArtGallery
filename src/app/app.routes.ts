import { Routes } from '@angular/router';
import { ProdListComponent } from './components/prod-list/prod-list.component';
import { HomeComponent } from './components/home/home.component';
import { ChangeTableOrderComponent } from './components/userTasks/change-table-order/change-table-order.component';
import { CategoryProdListeComponent } from './components/category-prod-liste/category-prod-liste.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { LoginComponent } from './components/userTasks/login/login.component';
import { ProductsEditComponent } from './components/userTasks/products-edit/products-edit.component';
import { InfoProdComponent } from './components/info-prod/info-prod.component';
import { PwdChangeComponent } from './components/userTasks/pwd-change/pwd-change.component';
import { EditOrderComponent } from './components/userTasks/edit-order/edit-order.component';
import { AddProdComponent } from './components/userTasks/add-prod/add-prod.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { NavBarUserComponent } from './components/userTasks/nav-bar-user/nav-bar-user.component';
import { authGuard } from './components/userTasks/auth.guard';

export const routes: Routes = [        
  {
    path: '',title:'',component:ToolBarComponent,
      children:[
        { path: 'wishList',title:'wishList', component: WishListComponent },
        {path: 'home',title:'home', component: HomeComponent },
        { path:'products/:category', component:CategoryProdListeComponent},
        { path: 'products', component: ProdListComponent },
        { path:'product/:id', component:InfoProdComponent},
        { path: '', redirectTo: 'home', pathMatch: 'full' }
      ]
  },

  {path: 'pwdChange', component: PwdChangeComponent},
  { path: 'login', component: LoginComponent },
  { path:'user',component:NavBarUserComponent,
    children:[
      { path: 'productEdit', component: ProductsEditComponent },
      { path: 'orderEdit', component: EditOrderComponent },
      { path: 'addProduct', component: AddProdComponent },
      { path: '', redirectTo: 'productEdit', pathMatch: 'full' }
    ],canActivate:[authGuard],
   },
   { path: '', redirectTo: '', pathMatch: 'full' }
  ];  
