import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DashboardService } from './dashboard.service';

export interface ProjectGrid {
  name: string;
  position: number;
  noofusers: number;
  nooftasks: number;
}

export interface ProjectUserTask
{
     ProjectId:number;
     Title:string;
     UserCount:number;
     TaskCount:number;
     StatusPercentage:string;
}

export interface AllProjectInfo
{
    AllProjectCount:number;
    AllTaskCount:number;
    CompletedTaskCount:number;
    PendingTaskCount:number;
    ProjectUserTaskGridInfo:ProjectUserTask[];
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,AfterViewInit {
  selectedProject:number=0;
  gridInfo: ProjectGrid[]=[];
  StatusPercentages:any=[];
  projects:AllProjectInfo={AllProjectCount:0,
    AllTaskCount:0,
    CompletedTaskCount:0,
    PendingTaskCount:0,
    ProjectUserTaskGridInfo:[]};
  bigChart:any = [];
  cards:any = [];
  pieChart:any = [];
  displayedColumns: string[] = ['position', 'name', 'noofusers', 'nooftasks'];
  dataSource = new MatTableDataSource<ProjectGrid>([]);
  @ViewChild(MatPaginator, { static: true }) paginator: any ;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.projects.ProjectUserTaskGridInfo.push({ProjectId:0,
      Title:'',
      UserCount:0,
      TaskCount:0,
      StatusPercentage:''});
    this.getProjectDetails();
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }
  title = 'hcupdate';
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;
  chartOptions: Highcharts.Options = 
  {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Project Status'
    },
    tooltip: {
      valueSuffix: ''
    },
    // subtitle: {
    //   text:
    //   'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
    // },
    plotOptions: {
      pie: {
        innerSize: '50%', // Make it a donut chart by setting innerSize
        depth: 45 // Increase the depth for a 3D effect
      }
    },
    series: [{
      type:'pie',
      name: 'Task',
      data: [
        
      ]
    }]
}
getProjectDetails(){
  this.dashboardService.getProjectDetails().subscribe((data: AllProjectInfo) => {
    debugger;
    console.log(data);
    this.projects = data;
    var i=0;
    data.ProjectUserTaskGridInfo.forEach((projectUserTaskGridInfo) =>{
      i++;
      this.gridInfo.push({ position: i, name: projectUserTaskGridInfo.Title, noofusers: projectUserTaskGridInfo.UserCount, nooftasks: projectUserTaskGridInfo.TaskCount });
   }); 
   
  this.dataSource = new MatTableDataSource<ProjectGrid>(this.gridInfo);
})
}; 

onProjectChanged(selProject:number)
{
    debugger;
    var StatusPercentages:any=[];
    this.projects.ProjectUserTaskGridInfo.forEach((projectUserTaskGridInfo) =>{
   if(projectUserTaskGridInfo.ProjectId==selProject)
   {   
    var statuses=projectUserTaskGridInfo.StatusPercentage.split(',');
    statuses.forEach((s) =>{
    var statusPercentage=s.split(':');
    StatusPercentages.push([statusPercentage[0],parseInt(statusPercentage[1])]);
    });
    this.chartOptions.title =  {
      text: 'Project Status'
    };
    this.chartOptions.series = [{
      type: 'pie',
      data:StatusPercentages
    }]

    this.updateFlag = true;
   } 
  }); 
   

}
  ngAfterViewInit() {
  }
}
