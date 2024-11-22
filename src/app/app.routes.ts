import { Routes } from '@angular/router';
import { ProdListComponent } from './components/prod-list/prod-list.component';
import { HomeComponent } from './components/home/home.component';
import { ChangeTableOrderComponent } from './components/userTasks/change-table-order/change-table-order.component';
import { CategoryProdListeComponent } from './components/category-prod-liste/category-prod-liste.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { AdminComponent } from './components/admin/admin.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { TablesComponent } from './components/tables/tables.component';
import { EditTableComponent } from './components/edit-table/edit-table.component';
import { LeonardDeVinciComponent } from './components/footer/artists/leonard-de-vinci/leonard-de-vinci.component';
import { AlbertMarquetComponent } from './components/footer/artists/albert-marquet/albert-marquet.component';
import { RaffinChristianComponent } from './components/footer/artists/raffin-christian/raffin-christian.component';
import { CatrineAlexandreComponent } from './components/footer/artists/catrine-alexandre/catrine-alexandre.component';
import { ConditionsComponent } from './components/footer/aide&guide/conditions/conditions.component';
import { PrivateLifeComponent } from './components/footer/aide&guide/private-life/private-life.component';
import { FaqComponent } from './components/footer/faq/faq.component';
// import { AbouUsComponent } from './components/footer/abou-us/abou-us.component';
// import { PlanDeSiteComponent } from './components/footer/aide&guide/plan-de-site/plan-de-site.component';

export const routes: Routes = [
    { path: 'allTab', component: ProdListComponent },
    { path: 'home', component: HomeComponent },
    { path: 'change', component: ChangeTableOrderComponent },
    { path: 'wishList', component: WishListComponent },

    { path:'products/:category', component:CategoryProdListeComponent},
    { path:'user',title:'Admin', component: AdminComponent},
    { path:'changePassword',title:'Changed password', component: ChangePasswordComponent},
    { path:'tables',title:'Tables', component: TablesComponent},
    {path:'tables/:id', component:EditTableComponent}, 
    {path:'EditTableComponent',component:EditTableComponent} ,
    { path:'',title:'Tables', component: TablesComponent},
    { path:'Leonard-de-Vinci',title:'Leonard-de-Vinci', component: LeonardDeVinciComponent},
    { path:'Albert-Marquet',title:'Albert-Marquet', component: AlbertMarquetComponent},
    { path:'Raffin-Christian',title:'Raffin-Christian', component: RaffinChristianComponent},
    { path:'Catrine-Alexandre',title:'Catrine-Alexandre', component: CatrineAlexandreComponent},
    { path:'conditions',title:'Conditions', component: ConditionsComponent},
    // { path:'plan',title:'PlanOfSite', component:PlanDeSiteComponent},
    { path:'PrivateLife',title:'PrivateLife&Cookies', component: PrivateLifeComponent},
    // { path:'aboutUs',title:'AboutUs', component:AbouUsComponent},
    { path:'faq',title:'FAQ', component: FaqComponent},
   





    { path:'', redirectTo: '/home', pathMatch: 'full' }  // Default route
  ];
