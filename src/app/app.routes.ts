import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ListComponent } from './main/list/list.component';
import { UserComponent } from './main/user/user.component';
import { ItemComponent } from './main/item/item.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent, 
    children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: ListComponent },
        { path: 'user', component: UserComponent },
        { path: 'item', component: ItemComponent }
    ]
  }
];