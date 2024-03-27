import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/project.service';
export interface Project {
  id: number;
  name: string;
  description: string;
  taskCount: number;
  startDate: Date;
  endDate: Date;
}
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];
  projectForm!: FormGroup;
  projectFormGroups: FormGroup[] = []; // Store project form groups
  editingIndex!: number;

  constructor(private projectService: ProjectService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.projects = this.projectService.getAllProjects();
    this.initForm();
    // this.editingIndex=0;
   
  }

  initForm(): void {
    this.projectForm = this.formBuilder.group({
      projects: this.formBuilder.array([])
    });
    this.projects.forEach(project => {
      const projectFormGroup = this.createProjectFormGroup(project);
      (this.projectForm.get('projects') as FormArray).push(projectFormGroup);
      this.projectFormGroups.push(projectFormGroup); // Store project form group
    });
   console.log(this.projectsFormArray);
  }

  createProjectFormGroup(project: Project): FormGroup {
    return this.formBuilder.group({
      id: [project.id],
      name: [project.name, Validators.required],
      description: [project.description, Validators.required],
      taskCount: [project.taskCount, Validators.required],
      startDate: [project.startDate.toISOString().substring(0, 10), Validators.required],
      endDate: [project.endDate.toISOString().substring(0, 10), Validators.required]
    });
  }

  deleteProject(index: number): void {
    this.projects.splice(index, 1);
    (this.projectForm.get('projects') as FormArray).removeAt(index);
    this.projectFormGroups.splice(index, 1); // Remove project form group from storage
  }
 
  addRow(): void {
    const newProject: Project = {
      id: this.projects.length + 1,
      name: '',
      description: '',
      taskCount: 0,
      startDate: new Date(),
      endDate: new Date()
    };
  
    this.projects.push(newProject);
  
    const projectFormGroup = this.createProjectFormGroup(newProject);
    (this.projectForm.get('projects') as FormArray).push(projectFormGroup);
  
    this.editingIndex = this.projects.length - 1; // Set editing index to the newly added project
    // this.saveProject(this.editingIndex);
  }
  
  isEditing(index: number): boolean {
    return this.editingIndex === index;
  }

  saveProject(index: number): void {
    // Save project logic
    this.editingIndex = 0;
    const projectFormGroup = this.projectFormGroups[index];
    // if (projectFormGroup) {
    //   // projectFormGroup.disable();
    // }
  }

  cancelEdit(index: number): void {
    this.editingIndex = 0;
    this.projectFormGroups[index].enable();
  }
  navigateToTasks(projectCtrl: any): void {
    debugger
    console.log(projectCtrl);
    this.router.navigate(['task'], { queryParams: { id: projectCtrl } });
  }

  editProject(index: number): void {
    console.log(index);
    this.editingIndex = index;
    const projectFormGroup = this.projectFormGroups[index];
    if (projectFormGroup) {
      projectFormGroup.enable();
    }
  }

  get projectsFormArray(): FormArray {
    return this.projectForm.get('projects') as FormArray;
  }
}
