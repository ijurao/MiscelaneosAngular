import { DetailUserComponent } from './_components/user/detail-user.component';
import { EditUserComponent } from './_components/user/edit-user.component';
import { NewUserComponent } from './_components/user/new-user.component';
import { UserComponent } from './_components/user/user.component';
import { HomeComponent } from './_components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'user/:id', component:UserComponent,
  children: [
    {path: 'new', component:NewUserComponent},
    {path: 'edit', component:EditUserComponent},
    {path: 'details', component:DetailUserComponent},
    {path: '**', pathMatch: 'full', redirectTo:'new'}



  ]},

  {path: '**', pathMatch: 'full', redirectTo:'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
