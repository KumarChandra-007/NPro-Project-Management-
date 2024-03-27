import { Component, OnInit,  ViewChild, TemplateRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService,Project } from 'src/app/project.service';
import {  MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { TaskDilougeComponent } from './task-dilouge/task-dilouge.component';
//import { ModalPopupComponent } from './components/modal-popup/modal-popup.component';


export interface Task {
  "TaskID": number;
  "Title": string,
  "Description": string,
  "Status": number,
  "Deadline": Date,
  "ProjectID": number,
  "RecordCount" : number
  
}
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

 
export class TaskComponent implements OnInit {
  projects: Project[] = [];
  tasks: Task[] = [];
  taskForm!: FormGroup;
  taskformGroups: FormGroup[] = [];
  editingIndex!: number;
  selectedProject!: number;
  isDropdownLoading!:boolean;
  projectId: number | undefined;
 // @ViewChild('modalContent') modalContent!: TemplateRef<any>;
  dialogRef!: MatDialogRef<any>;

  constructor(private projectService: ProjectService, private formBuilder: FormBuilder, private route: ActivatedRoute,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.tasks = this.projectService.getAllTasks();
    this.initForm();
    this.getProjectList();
    this.fetchDefaultProject();
  
  }
  statusOptions = [
    { label: 'ToDo', value: 0 },
    { label: 'InProgress', value: 1 },
    { label: 'Dev', value: 2 },
    { label: 'Pr', value: 3 },
    { label: 'QA', value: 4 }
  ];

  initForm(): void {
    this.taskForm = this.formBuilder.group({
      tasks: this.formBuilder.array([])
    });
    this.tasks.forEach(task => {
      const taskformGroup = this.createTaskFormGroup(task);
      (this.taskForm.get('tasks') as FormArray).push(taskformGroup);
      this.taskformGroups.push(taskformGroup); // Store project form group
    });
   
  }

  createTaskFormGroup(task: Task): FormGroup {
    return this.formBuilder.group({
      name: [task.Title, Validators.required],
      AcceptanceDesc: [task.Description, Validators.required],
      Signoff: [false, Validators.required],
      status: [task.Status, Validators.required],
    });
  }
  deleteProject(index: number): void {
    this.tasks.splice(index, 1);
    (this.taskForm.get('tasks') as FormArray).removeAt(index);
    this.taskformGroups.splice(index, 1); // Remove project form group from storage
  }
 
  addRow(): void {
    const newtask: Task = {
      "TaskID": 0,
  "Title": " ",
  "Description": "",
  "Status": 0,
  "Deadline":new Date,
  "ProjectID": 0,
  "RecordCount" : 1
  
};
  
    this.tasks.push(newtask);
  
    const taskFormGroup = this.createTaskFormGroup(newtask);
    (this.taskForm.get('tasks') as FormArray).push(taskFormGroup);
  
    this.editingIndex = this.tasks.length - 1; // Set editing index to the newly added project
    // this.saveProject(this.editingIndex);
  }
  fetchDefaultProject(){
    this.route.queryParams.subscribe(params => {
      this.projectId = params['id'];
      console.log('Project ID:', this.projectId);
    });
    
    if(this.projectId!=undefined){
    this.selectedProject=Number(this.projectId);

    }
  }
  isEditing(index: number): boolean {
    return this.editingIndex === index;
  }

  saveProject(index: number): void {
    // Save project logic
    this.editingIndex = 0;
    const taskFormGroup = this.taskformGroups[index];
    // if (taskFormGroup) {
    //   // taskFormGroup.disable();
    // }
  }

  cancelEdit(index: number): void {
    this.editingIndex = 0;
    const taskFormGroup = this.taskformGroups[index];
    if (taskFormGroup) {
      taskFormGroup.disable();
    }
  }

  editProject(index: number): void {
    console.log(index);
    this.editingIndex = index;
    const taskFormGroup = this.taskformGroups[index];
    if (taskFormGroup) {
      taskFormGroup.enable();
    }
  }

  get tasksFormArray(): FormArray {
    return this.taskForm.get('tasks') as FormArray;
  }
  getProjectList(){
    
    this.projects = this.projectService.getAllProjects();
    console.log(this.projects)
   }

  // model-popup//
   openDialog(): void {
    const dialogRef = this.dialog.open(TaskDilougeComponent,{
      height: '400px',
      width: '750px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
   
  }

  //  openModal(content: TemplateRef<any>): void {
  //   if(this.modalContent){
  //   this.dialogRef = this.dialog.open(content, {
  //     width: '400px',
  //     height: '300px'
  //   });
  // }else{console.log("content is not defined")}
  // }
  // TaskDetails(index: number): void {
  //   if (index >= 0 && index < this.taskformGroups.length) {
  //     const taskFormGroup = this.taskformGroups[index];
  //     this.openModal(this.modalContent);
  //   } else {
  //     console.error(`Invalid index: ${index}`);
  //   }
  // }
  }


