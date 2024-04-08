import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AllProjectInfo} from '../dashboard/dashboard.component'
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  readonly rootUrl = 'https://localhost:44303/';

  constructor(private http:HttpClient) { }

  getProjectDetails() {
    return this.http.get<AllProjectInfo>(this.rootUrl + 'userapi/GetProjectUserTaskMapping');        
  }

  bigChart() {
    return [{
      name: 'Asia',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Africa',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'America',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'project 1',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'project 1',
      y: 11.84
    }, {
      name: 'project 1',
      y: 10.85
    }, {
      name: 'project 1',
      y: 4.67
    }, {
      name: 'project 1',
      y: 4.18
    }, {
      name: 'project 1',
      y: 1.64
    }];
  }
}
