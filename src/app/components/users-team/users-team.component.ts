import { Component, OnInit } from '@angular/core';
import { UserTeamService } from 'src/app/services/user-team.service';

@Component({
  selector: 'app-users-team',
  templateUrl: './users-team.component.html',
  styleUrls: ['./users-team.component.scss']
})
export class UsersTeamComponent implements OnInit {
employeeData:any;
// getEmployeeAaary:any;
// getSingleEmp:any;
  constructor(private userTeamSer:UserTeamService) { }

  ngOnInit(): void {
    // this.getEmployee();
    this.getUserList();
  }
  getUserList(){
    this.userTeamSer.getAllUser().subscribe((data: any) => {
      console.log(data);
      this.employeeData = data;
      // localStorage.setItem('userData', JSON.stringify(data)); 
  })
};

// getEmployee(){
//   this.userTeamSer.getUserTeamDetaiils().subscribe(data => this.getEmployeeAaary);
//  console.log(this.getEmployee, 'this is employee data');
//   this.employeeData=[
//     {
//       "slNo":1,
//       "userId":"rirani",
// "jobTitleName":"Developer",
// "firstName":"Romin",
// "lastName":"Irani",
// "preferredFullName":"Romin Irani",
// "employeeCode":"E1",
// "region":"CA",
// "phoneNumber":"408-1234567",
// "emailAddress":"romin.k.irani@gmail.com"

//     },
//     {
    
//       "slNo":2,
//       "userId":"nirani",
// "jobTitleName":"Developer",
// "firstName":"Neil",
// "lastName":"Irani",
// "preferredFullName":"Neil Irani",
// "employeeCode":"E2",
// "region":"CA",
// "phoneNumber":"408-1111111",
// "emailAddress":"neilrirani@gmail.com"

//     },
//     {
    
//       "slNo":3,
//       "userId":"thanks",
// "jobTitleName":"Program Directory",
// "firstName":"Tom",
// "lastName":"Hanks",
// "preferredFullName":"Tom Hanks",
// "employeeCode":"E3",
// "region":"CA",
// "phoneNumber":"408-2222222",
// "emailAddress":"tomhanks@gmail.com"

//     },
//     {
    
//       "slNo":4,
//       "userId":"thanks",
// "jobTitleName":"Program Directory",
// "firstName":"Tom",
// "lastName":"Hanks",
// "preferredFullName":"Tom Hanks",
// "employeeCode":"E3",
// "region":"CA",
// "phoneNumber":"408-2222222",
// "emailAddress":"tomhanks@gmail.com"

//     },
//     {
    
//       "slNo":5,
//       "userId":"thanks",
//       "jobTitleName":"Program Directory",
//       "firstName":"Tom",
//       "lastName":"Hanks",
//       "preferredFullName":"Tom Hanks",
//       "employeeCode":"E3",
//       "region":"CA",
//       "phoneNumber":"408-2222222",
//       "emailAddress":"tomhanks@gmail.com"
//     }
//   ];
//   console.log(this.employeeData);
// }

// getSingleEmployee(){
//   this.userTeamSer.getSingleUserDetails().subscribe(data=>this.getSingleEmp);
//   console.log(this.getSingleEmployee, 'this is for single employee');
// }
}
