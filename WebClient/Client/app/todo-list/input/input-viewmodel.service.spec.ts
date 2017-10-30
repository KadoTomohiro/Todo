import { TestBed, inject } from '@angular/core/testing';

import { InputViewmodelService } from './input-viewmodel.service';

describe('InputViewmodelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputViewmodelService]
    });
  });

  it('should be created', inject([InputViewmodelService], (service: InputViewmodelService) => {
    expect(service).toBeTruthy();
  }));
});
