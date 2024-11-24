import { Routes } from '@angular/router';
import { ProdListComponent } from './components/prod-list/prod-list.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryProdListeComponent } from './components/category-prod-liste/category-prod-liste.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { LoginComponent } from './components/userTasks/login/login.component';
import { ProductsEditComponent } from './components/userTasks/products-edit/products-edit.component';
import { InfoProdComponent } from './components/info-prod/info-prod.component';
import { PwdChangeComponent } from './components/userTasks/pwd-change/pwd-change.component';
import { EditOrderComponent } from './components/userTasks/edit-order/edit-order.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { NavBarUserComponent } from './components/userTasks/nav-bar-user/nav-bar-user.component';
import { authGuard } from './components/userTasks/auth.guard';
import { LeonardDeVinciComponent } from './components/footer/artists/leonard-de-vinci/leonard-de-vinci.component';
import { AlbertMarquetComponent } from './components/footer/artists/albert-marquet/albert-marquet.component';
import { RaffinChristianComponent } from './components/footer/artists/raffin-christian/raffin-christian.component';
import { CatrineAlexandreComponent } from './components/footer/artists/catrine-alexandre/catrine-alexandre.component';
import { FaqComponent } from './components/footer/faq/faq.component';
import { CreateProductComponent } from './components/userTasks/create-product/create-product.component';
import { UpdateProductComponent } from './components/userTasks/update-product/update-product.component';
import { ErrorComponent } from './components/error/error.component';
import { AboutUssComponent } from './components/about-uss/about-uss.component';


export const routes: Routes = [        
  {
    path: '',title:'',component:ToolBarComponent,
      children:[
        { path: 'wishList',title:'wishList', component: WishListComponent },
        {path: 'home',title:'home', component: HomeComponent },
        { path:'products/:category', component:CategoryProdListeComponent},
        { path: 'products', component: ProdListComponent },
        { path:'product/:id', component:InfoProdComponent},
        {path: 'Leonard-de-Vinci', component: LeonardDeVinciComponent},
        {path: 'Albert-Marquet', component: AlbertMarquetComponent},
        {path: 'Raffin-Christian', component: RaffinChristianComponent},
        {path: 'Catrine-Alexandre', component: CatrineAlexandreComponent},
        {path: 'faq', component: FaqComponent},
        {path:'aboutUs',component:AboutUssComponent},
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: '**', title: 'Error', component: ErrorComponent }

      ]
  },       
  {path: 'pwdChange', component: PwdChangeComponent},


  { path: 'login', component: LoginComponent },
  { path:'user',component:NavBarUserComponent,
    children:[
      { path:'product/:id', component:InfoProdComponent},
      { path: 'productEdit', component: ProductsEditComponent },
      { path: 'orderEdit', component: EditOrderComponent },
      { path: '', redirectTo: 'productEdit', pathMatch: 'full' },
      {path:'update/:id',component:UpdateProductComponent },
      { path: 'addProduct', component: CreateProductComponent },
      { path: '**', title: 'Error', component: ErrorComponent }

    ],canActivate:[authGuard],
   },
   { path: '', redirectTo: '', pathMatch: 'full' },
   { path: '**', title: 'Error', component: ErrorComponent },
  ];  
