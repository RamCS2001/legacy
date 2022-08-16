import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './authentication/auth.guard';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { ParticipateComponent } from './participate/participate.component';
import { ParticipatesComponent } from './participates/participates.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "event/:id", component: EventComponent},
  {path: "register", component:RegisterComponent},
  {path: "login", component:LoginComponent},
  {path: "profile", component:ProfileComponent, canActivate:[AuthGuard]},
  {path: "participate/:id", component:ParticipateComponent, canActivate:[AuthGuard]},
  {path: "participates/:id", component:ParticipatesComponent, canActivate:[AuthGuard]},
  {path: "admin", component:AdminComponent, canActivate:[AuthGuard]},
  {path: "list/:id", component:ListComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
