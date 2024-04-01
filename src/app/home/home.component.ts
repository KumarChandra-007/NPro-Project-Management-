import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  username: string = '';
  password: string = '';

  user: boolean = false;
  project: boolean = false;
  task: boolean = false;
  dashboard: boolean = false;

  navigateTo(component: string) {
    this.user = component === 'user';
    this.project = component === 'project';
    this.task = component === 'task';
    this.dashboard = component === 'dashboard';
  }
constructor(private router:Router){

}
showAside:boolean=true;


  arrowClick(){
    alert('this click');
}
}
