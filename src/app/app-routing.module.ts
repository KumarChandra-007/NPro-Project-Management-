import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersTeamComponent } from './components/users-team/users-team.component';
import { ProjectComponent } from './components/project/project.component';
import { TaskComponent } from './components/task/task.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'users-team',
    pathMatch:'full'
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }