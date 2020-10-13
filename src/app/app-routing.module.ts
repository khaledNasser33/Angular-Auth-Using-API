import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChangePasswordRequestComponent } from './components/change-password-request/change-password-request.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {AuthGuardService} from './shared/auth-guard.service'
import {UserProfileGuardService} from './shared/user-profile-guard.service'

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'home', component: HomeComponent
  },
{
  path:'login', component: SigninComponent,canActivate:[AuthGuardService]
},


{
  path:'register', component: SignupComponent,canActivate:[AuthGuardService]
},
{
  path:'profile', component: UserProfileComponent,canActivate:[UserProfileGuardService]
},
{
  path:'reset-password', component: ChangePasswordRequestComponent,canActivate:[AuthGuardService]
},
{ path: 'change-password', component: ChangePasswordComponent,canActivate:[AuthGuardService] },

{
  path:'**', component: HomeComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
