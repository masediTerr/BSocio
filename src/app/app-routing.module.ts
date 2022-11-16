import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './componets/admin/admin.component';
import { ClientAppComponent } from './componets/client-app/client-app.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './componets/not-found/not-found.component';
import { RegisterComponent } from './auth/register/register.component';
import { SettingsComponent } from './componets/settings/settings.component';
import { SignOutComponent } from './auth/sign-out/sign-out.component';
import { BsLoansComponent } from './componets/dashboard/bs-loans/bs-loans.component';
import { BankerComponent } from './componets/dashboard/banker/banker.component';
import { ViewComponent } from './componets/dashboard/view/view.component';
import { UserProfileComponent } from './componets/dashboard/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '' , component: LoginComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'sign-up', component: RegisterComponent
  },
  {
    path:'logout', component: SignOutComponent
  },
  { path:'user',component: ClientAppComponent,
    children: [
      {path:'dashboard', component: DashboardComponent},
      {path:'settings',component: SettingsComponent},
      {path:'view',component: ViewComponent},
      {path:'deposit',component: BankerComponent},
      {path:'profile/:id',component: UserProfileComponent},
      {path:'loan',component: BsLoansComponent},
    ]
  },
  {
    path: 'admin', component:AdminComponent,
    children: [
      {path:'dashboard', component: DashboardComponent},
      {path:'settings',component: SettingsComponent}
    ]
  },
  {
    path: '**' as 'Invalid', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
