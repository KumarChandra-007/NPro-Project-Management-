import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '../../project/project.component';
import { ProjectService } from 'src/app/project.service';
import { HttpResponse } from '@angular/common/http';
export interface Task {
  taskID: number,
  title: string,
  description: string,
  status: string,
  deadline: Date,
  projectID: number,
  taskCount: number
}
export interface contributions {
  contributionId: number,
  taskID: number,
  userID: number,
  timeSpent: string,
  description: string
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
  contributions: any;
  editMode!: boolean;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public projectService:ProjectService) { }

  ngOnInit(): void {
    
    this.projects=this.data.params;
    console.log(this.data);
    this.getAllComment();
    // this.comments.forEach(() => this.editMode.push(false));
  }
  fetchTasklist(id:number){
    console.log(id);
    this.getTasklistById(id);
   
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
      this.contributions=data;
      this.getCommentBytaskId(taskid);
    })
  }
  getCommentBytaskId(id:number){
this.projectService.getCommentById(id).subscribe(data=>{
  console.log(data);
  this.comments=data;
})
  }
  toggleEditMode() {
    // console.log(id);
    this.editMode = !this.editMode;
}
saveComment(obj:any,id:number){
  debugger
 let  comPayload={
  CommentID: obj.commentID,
  TaskID: obj.taskID,
  Content: obj.content,
  Timestamp: obj.timestamp,
  Status: obj.status,
  UserID:obj.userID
   }
  this.projectService.saveComment(comPayload).subscribe((res:HttpResponse<any>)=>{
    console.log(res);
    if(res){
      this.editMode=false;
    }},(error)=>{console.log("error is there")}
  );
}

}
