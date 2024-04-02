import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '../../project/project.component';
import { ProjectService } from 'src/app/project.service';
export interface Task {
  taskID: number,
  title: string,
  description: string,
  status: string,
  deadline: Date,
  projectID: number,
  taskCount: number
}
@Component({
  selector: 'app-task-dilouge',
  templateUrl: './task-dilouge.component.html',
  styleUrls: ['./task-dilouge.component.scss']
})
export class TaskDilougeComponent implements OnInit {
  tasks:Task[]=[];
  projects: Project[] = [];
  comments: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public projectService:ProjectService) { }

  ngOnInit(): void {
    
    this.projects=this.data.params;
    console.log(this.data);
    this.getAllComment();
  }
  fetchTasklist(id:number){
    console.log(id);
    this.getTasklistById(id)
  }
  getTasklistById(id:number){
    this.projectService.getTasklistbyId(id).subscribe(data=>
      {console.log(data);
      this.tasks=data;
      })
  }
  getAllComment(){
    this.projectService.getAllComments().subscribe(res=>{
      console.log(res);
      this.comments=res;
    })
  }
  fetchContribution(taskid:number){
    this.projectService.getContributionbytaskId(taskid).subscribe(data=>{
      console.log(data);
    })
  }
}
