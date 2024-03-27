import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-team',
  templateUrl: './users-team.component.html',
  styleUrls: ['./users-team.component.scss']
})
export class UsersTeamComponent implements OnInit {
employeeData:any;
  constructor() { }

  ngOnInit(): void {
    this.getEmployee();
  }
getEmployee(){
  this.employeeData=[
    {
      "slNo":1,
      "userId":"rirani",
"jobTitleName":"Developer",
"firstName":"Romin",
"lastName":"Irani",
"preferredFullName":"Romin Irani",
"employeeCode":"E1",
"region":"CA",
"phoneNumber":"408-1234567",
"emailAddress":"romin.k.irani@gmail.com"

    },
    {
      // "slNo":1,
      // "name":"Naga mahesh",
      // "date":"18/08/2023",
      // "role":"Developer",
      // "projects":2
      "slNo":2,
      "userId":"nirani",
"jobTitleName":"Developer",
"firstName":"Neil",
"lastName":"Irani",
"preferredFullName":"Neil Irani",
"employeeCode":"E2",
"region":"CA",
"phoneNumber":"408-1111111",
"emailAddress":"neilrirani@gmail.com"

    },
    {
      // "slNo":1,
      // "name":"Naga mahesh",
      // "date":"18/08/2023",
      // "role":"Developer",
      // "projects":2
      "slNo":3,
      "userId":"thanks",
"jobTitleName":"Program Directory",
"firstName":"Tom",
"lastName":"Hanks",
"preferredFullName":"Tom Hanks",
"employeeCode":"E3",
"region":"CA",
"phoneNumber":"408-2222222",
"emailAddress":"tomhanks@gmail.com"

    },
    {
      // "slNo":1,
      // "name":"Naga mahesh",
      // "date":"18/08/2023",
      // "role":"Developer",
      // "projects":2
      "slNo":4,
      "userId":"thanks",
"jobTitleName":"Program Directory",
"firstName":"Tom",
"lastName":"Hanks",
"preferredFullName":"Tom Hanks",
"employeeCode":"E3",
"region":"CA",
"phoneNumber":"408-2222222",
"emailAddress":"tomhanks@gmail.com"

    },
    {
      // "slNo":1,
      // "name":"Naga mahesh",
      // "date":"18/08/2023",
      // "role":"Developer",
      // "projects":2
      "slNo":5,
      "userId":"thanks",
      "jobTitleName":"Program Directory",
      "firstName":"Tom",
      "lastName":"Hanks",
      "preferredFullName":"Tom Hanks",
      "employeeCode":"E3",
      "region":"CA",
      "phoneNumber":"408-2222222",
      "emailAddress":"tomhanks@gmail.com"
    }
  ];
  console.log(this.employeeData);
}
}
