import { TestBed, inject } from '@angular/core/testing';

import { TaskObservableService } from './task-observable.service';

describe('TaskObservableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskObservableService]
    });
  });

  it('should be created', inject([TaskObservableService], (service: TaskObservableService) => {
    expect(service).toBeTruthy();
  }));
});
