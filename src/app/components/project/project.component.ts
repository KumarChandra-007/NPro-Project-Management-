import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/project.service';
// import { CsToastService } from '@cs/cs-response-controls';

//import { setTimeout } from 'timers';
export interface Project {
  projectID: number;
  title: string;
  description: string;
  taskCount: number;
  startDate: Date;
  deadline: Date;
  creatorID:number;
  status:string;
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
  initCount:number=0;
  constructor(private projectService: ProjectService, private formBuilder: FormBuilder, private router: Router,
   ) {}

  ngOnInit(): void {
    this.getProjectData();
      
  }
  ngDoCheck():void
  {
    // debugger;
    this.initCount++;
    if(this.initCount<=3)
    {
    this.initForm();
    }
  }
  
  getProjectData() {
    //debugger
    this.projectService.getAllProjects().subscribe(
      (data: Project[]) => {
        console.log(data);
        this.projects = data;
        console.log(this.projects);
      }
    );

  }

  // initForm(){
    
  //   this.projectForm = this.formBuilder.group({
  //     projects: this.formBuilder.array([])
  //   });
  //   this.projects.forEach(project => {
  //     console.log(project);
  //     const projectFormGroup = this.createProjectFormGroup(project);
  //     (this.projectForm.get('projects') as FormArray).push(projectFormGroup);
  //     this.projectFormGroups.push(projectFormGroup); 
  //   });
  //  console.log(this.projectsFormArray);
  //  return 1;
  // }

  initForm() {
    this.projectForm = this.formBuilder.group({
      projects: this.formBuilder.array([]) // Initialize projects form array
    });

    this.projects.forEach(project => {
      const projectFormGroup = this.createProjectFormGroup(project);
      (this.projectForm.get('projects') as FormArray).push(projectFormGroup);
      this.projectFormGroups.push(projectFormGroup); // Store project form group
    });
    //this.isfirst=false;
    console.log(this.projectForm.value); // Log the form value to check
    return 1; // Return a value if needed
  }

  createProjectFormGroup(project: Project): FormGroup {
    return this.formBuilder.group({
      projectID: [project.projectID],
      title: [project.title, Validators.required],
      description: [project.description, Validators.required],
      taskCount: [project.taskCount, Validators.required],
      startDate: [project.startDate.toString().substring(0, 10), Validators.required],
      deadline: [project.deadline.toString().substring(0, 10), Validators.required]
    });
  }

  deleteProject(index: number): void {
    this.projects.splice(index, 1);
    (this.projectForm.get('projects') as FormArray).removeAt(index);
    this.projectFormGroups.splice(index, 1); // Remove project form group from storage
  }
 
  addRow(): void {
    const newProject: Project = {
      projectID: 0,
      title: '',
      description: '',
      taskCount: 0,
      startDate: new Date(),
      deadline: new Date(),
      creatorID:0,
      status:""
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

  saveProject(data:any): void {
    console.log(data)
    let payload={
      projectID :data.projectID, 
      title:data.title,
      description:data.title,
      startDate: data.startDate,
      deadline:data.deadline,
      status: "open",
      creatorID: 1
    }
    debugger
    if(data.projectID ==0){
    this.projectService.createProject(payload).subscribe(res=> {console.log(res);
      this.editingIndex = 0;
     this.getProjectData();

  });
       const projectFormGroup = this.projectFormGroups[data.ProjectID];
    }
    else{
      this.projectService.updateProject(payload).subscribe(res=> {console.log(res);
        this.editingIndex = 0;
        this.getProjectData();
       
    })

      ;
    }
    // if (projectFormGroup) {
    //   // projectFormGroup.disable();
    // }
  }

  cancelEdit(index: number): void {
    this.editingIndex = 0;
    this.projectFormGroups[index].enable();
  }
  navigateToTasks(projectCtrl: any): void {
    // debugger
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
