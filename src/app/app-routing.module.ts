import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersTeamComponent } from './components/users-team/users-team.component';
import { ProjectComponent } from './components/project/project.component';
import { TaskComponent } from './components/task/task.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
  {
    path:'login', component: LoginComponent
  },

  {
    path:'users-team',
    component:UsersTeamComponent
  },
  {
    path:'project',
    component:ProjectComponent
  },
  {
    path:'task',
    component:TaskComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'Routes',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  
  { path: 'main', component: UsersTeamComponent }, 

  { path: 'home', component:HomeComponent} ,
  { path: '**', redirectTo: 'login' }
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export { Routes };
