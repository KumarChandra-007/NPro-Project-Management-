import { Component } from '@angular/core';
//import { LoginComponent } from '../login/login.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
constructor(private router:Router, private auth:AuthService){

}

  login() {
    const credentials = {
      username : this.username,
      password : this.password
    };
 
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    this.auth.loginUser(credentials).subscribe((data: any) => {
      localStorage.setItem('userData', JSON.stringify(data)); 
      this.router.navigate(['/home']); 
  })
};
}
