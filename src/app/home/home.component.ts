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
constructor(private router:Router){

}
showAside:boolean=true;


  arrowClick(){
    alert('this click');
}

// navigateToroute(type:any){
//   switch(type){
//     case "dashboard" : this.router.navigate(['/dashboard']);
//     break;
//     case "dashboard" : this.router.navigate(['/dashboard']);
//     break;
//     case "dashboard" : this.router.navigate(['/dashboard']);
//     break;
//     case "dashboard" : this.router.navigate(['/dashboard']);
//     break;

//   }
// }
}
