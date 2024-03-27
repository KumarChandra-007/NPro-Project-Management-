import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/project.service';
export interface Task {
  name: string;
  AceeptanceDesc: string;
  signoff:boolean;
  status: string;
  
}
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

 
export class TaskComponent implements OnInit {

  tasks: Task[] = [];
  taskForm!: FormGroup;
  taskformGroups: FormGroup[] = [];
  editingIndex!: number;
  constructor(private projectService: ProjectService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.tasks = this.projectService.getAllTasks();
    this.initForm();
  
  }

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
      name: [task.name, Validators.required],
      AcceptanceDesc: [task.AceeptanceDesc, Validators.required],
      Signoff: [task.signoff, Validators.required],
      status: [task.status, Validators.required],
    });
  }
  deleteProject(index: number): void {
    this.tasks.splice(index, 1);
    (this.taskForm.get('tasks') as FormArray).removeAt(index);
    this.taskformGroups.splice(index, 1); // Remove project form group from storage
  }
 
  addRow(): void {
    const newtask: Task = {
      name: '',
      AceeptanceDesc: '',
      signoff: false,
      status: "To Do",
     
    };
  
    this.tasks.push(newtask);
  
    const taskFormGroup = this.createTaskFormGroup(newtask);
    (this.taskForm.get('tasks') as FormArray).push(taskFormGroup);
  
    this.editingIndex = this.tasks.length - 1; // Set editing index to the newly added project
    // this.saveProject(this.editingIndex);
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
  }


