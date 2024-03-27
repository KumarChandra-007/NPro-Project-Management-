import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTeamComponent } from './users-team.component';

describe('UsersTeamComponent', () => {
  let component: UsersTeamComponent;
  let fixture: ComponentFixture<UsersTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
