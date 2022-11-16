import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componets/nav-bar/nav-bar.component';
import { SearchComponent } from './componets/client-app/search/search.component';
import { ClientAppComponent } from './componets/client-app/client-app.component';
import { AdminComponent } from './componets/admin/admin.component';
import { SettingsComponent } from './componets/settings/settings.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundComponent } from './componets/not-found/not-found.component';
import { SignOutComponent } from './auth/sign-out/sign-out.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { ViewComponent } from './componets/dashboard/view/view.component';
import { BankerComponent } from './componets/dashboard/banker/banker.component';
import { BsLoansComponent } from './componets/dashboard/bs-loans/bs-loans.component';
import { UserProfileComponent } from './componets/dashboard/user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { WorkspaceComponent } from './componets/dashboard/workspace/workspace.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchComponent,
    ClientAppComponent,
    AdminComponent,
    SettingsComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    SignOutComponent,
    ProfileComponent,
    ViewComponent,
    BankerComponent,
    BsLoansComponent,
    UserProfileComponent,
    WorkspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
