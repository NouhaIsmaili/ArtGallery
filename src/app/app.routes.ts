import { Routes } from '@angular/router';
import { TablesComponent } from './components/tables/tables.component';
import { EditTableComponent } from './components/edit-table/edit-table.component';
import { UserComponent } from './components/user/user.component';
import { ChangedPasswordComponent } from './components/changed-password/changed-password.component';

export const routes: Routes = [
    { path: 'user', component: UserComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'tables/:id', component: EditTableComponent},  
    { path: 'changePassword', component: ChangedPasswordComponent}
   
];
