import { TestBed, inject } from '@angular/core/testing';

import { TodoClientService } from './todo-client.service';

describe('TodoClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoClientService]
    });
  });

  it('should be created', inject([TodoClientService], (service: TodoClientService) => {
    expect(service).toBeTruthy();
  }));
});
