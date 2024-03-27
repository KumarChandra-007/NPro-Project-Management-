import { TestBed } from '@angular/core/testing';

import { DashboardService } from './components/dashboard/dashboard.service';

describe('DashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    expect(service).toBeTruthy();
  });
});
