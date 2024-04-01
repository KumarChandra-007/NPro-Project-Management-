import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTeamService {
  readonly rootUrl = 'https://localhost:44303/';
  token: any;
  
//  url: string="http://localhost:13416/api/Account/GetAllUserDetails";
// URL: string="http://localhost:13416/api/Account/GetUserDetails";
  constructor(private http:HttpClient) { }
  // getUserTeamDetaiils(){
  //   return this.http.get(this.url);
  // }

  // getSingleUserDetails(){
  //   return this.http.get(this.URL);
  // }
  
      getAllUser() {
        const userObject = localStorage.getItem('userData');        
        if (userObject) {      
           this.token = JSON.parse(userObject).token;
          console.log(this.token);      
        }        
        const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
        console.log(headers);
        return this.http.get(this.rootUrl + 'api/Account/GetAllUserDetails', { headers });        
      }
  }
