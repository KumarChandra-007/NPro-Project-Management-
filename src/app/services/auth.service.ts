import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private username: string | undefined;
  readonly rootUrl = 'https://localhost:44303/';
  constructor(private http: HttpClient) { }


    // // Simulate a login operation
    // login(username: string, password: string): boolean {
    //   // Here you can implement your authentication logic
    //   // For simplicity, I'm just setting loggedIn to true
    //   this.loggedIn = true;
    //   this.username = username;
    //   return true;
    // }

    loginUser(user : any) {
      const body = {
        Email: user.email,
        Password: user.password
      };
      console.log('test', body);
      return this.http.get(this.rootUrl + 'userapi/authenticate?username='+user.username+'&password='+user.password);
    }
    // Check if user is logged in
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  // Get the username of the logged-in user
  getUsername(): string | undefined {
    return this.username;
  }
   // Log out the user
   logout(): void {
    this.loggedIn = false;
    this.username = undefined;
  }
}
