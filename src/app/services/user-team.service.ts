import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserTeamService {
 url: string="http://localhost:13416/api/Account/GetAllUserDetails";
URL: string="http://localhost:13416/api/Account/GetUserDetails";
  constructor(private http:HttpClient) { }
  getUserTeamDetaiils(){
    return this.http.get(this.url);
  }

  getSingleUserDetails(){
    return this.http.get(this.URL);
  }





}
