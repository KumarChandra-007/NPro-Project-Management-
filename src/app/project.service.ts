import { Injectable } from '@angular/core';
import { API_GATEWAY } from 'src/environments/environment';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  id: number;
  name: string;
  description: string;
  taskCount: number;
  startDate: Date;
  endDate: Date;
}


export interface Task {
  "TaskID": number;
  "Title": string,
  "Description": string,
  "Status": number,
  "Deadline": Date,
  "ProjectID": number,
  "RecordCount" : number
  
}
@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  private apiURL = API_GATEWAY.PROJECT_URL;
  
    projects: Project[] = [
      {
        id: 1,
        name: 'Project 1',
        description: 'Description for Project 1',
        taskCount: 5,
        startDate: new Date('2022-01-01'),
        endDate: new Date('2022-01-31')
      },
      {
        id: 2,
        name: 'Project 2',
        description: 'Description for Project 2',
        taskCount: 10,
        startDate: new Date('2022-02-01'),
        endDate: new Date('2022-02-28')
      },
      {
        id: 3,
        name: 'Project 3',
        description: 'Description for Project 3',
        taskCount: 8,
        startDate: new Date('2022-03-01'),
        endDate: new Date('2022-03-31')
      }
    ];
  
    constructor(private httpClient: HttpClient) { }
  
    // getAllProjects(): Project[] {
    //   return this.projects;
    // }
    createProject(payload: any):Observable<any>{
      return this.httpClient.post<any>("http://localhost:16737/projectapi/PostProject",payload);
    }
    getAllProjects(): Observable<any>  {
      return this.httpClient.get<any>("http://localhost:16737/projectapi/GetProjects");
      // return this.httpClient.get<any>(this.apiURL + "api/CommentManagement/GetCommentDetails");
    }
    deleteProject(id: any): Observable<any> {
      return this.httpClient.delete<any>(`http://localhost:16737/projectapi/DeleteProjectByIdAsync/${id}`);
    }
    updateProject(payload:any): Observable<any> {
      return this.httpClient.put<any>("http://localhost:16737/projectapi/PutProject",payload);
      
    }
    Tasks:Task[]=
    [
      {
        "TaskID": 1,
        "Title": "Task1",
        "Description": "API development1",
        "Status": 1,
        "Deadline": new Date('2022-03-31'),
        "ProjectID": 1,
        "RecordCount" : 4
      },
      {
        "TaskID": 2,
        "Title": "Task2",
        "Description": "API development2",
        "Status": 1,
        "Deadline": new Date('2022-03-31'),
        "ProjectID": 1,
       "RecordCount" : 4
      },
      {
        "TaskID": 3,
        "Title": "Task3",
        "Description": "UI development1",
        "Status": 1,
        "Deadline": new Date('2022-03-31'),
        "ProjectID": 1,
        "RecordCount" : 4
      },
      {
        "TaskID": 4,
        "Title": "Task4",
        "Description": "UI development2",
        "Status": 1,
        "Deadline": new Date('2022-03-31'),
        "ProjectID": 1,
        "RecordCount" : 4
      }
    
    ]
getTaskcount(): Observable<any>  {
  return this.httpClient.get<any>("http://localhost:5057/taskapi/gettaskcount");
  // return this.httpClient.get<any>(this.apiURL + "api/CommentManagement/GetCommentDetails");
}
    getAllTasks(): Task[] {
      return this.Tasks;
    }
  }
  