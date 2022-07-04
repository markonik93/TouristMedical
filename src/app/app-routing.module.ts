import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent  } from './homepage/homepage.component';
import { OrdersComponent } from './orders/orders.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'orders', component: OrdersComponent },
  { path: 'logIn', component: LogInComponent  },
  { path: 'registration', component: RegistrationComponent},
  { path: 'profile', component: UserProfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
