import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDilougeComponent } from './task-dilouge.component';

describe('TaskDilougeComponent', () => {
  let component: TaskDilougeComponent;
  let fixture: ComponentFixture<TaskDilougeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDilougeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDilougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
