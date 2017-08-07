import { TestBed, inject } from '@angular/core/testing';

import { TodoitemsPromiseService } from './todotasks-promise.service';

describe('TodoitemsPromiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoitemsPromiseService]
    });
  });

  it('should be created', inject([TodoitemsPromiseService], (service: TodoitemsPromiseService) => {
    expect(service).toBeTruthy();
  }));
});
