import { TestBed, inject } from '@angular/core/testing';

import { DynamicFormService } from './dynamic-form.service';

describe('DynamicFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicFormService]
    });
  });

  it('should ...', inject([DynamicFormService], (service: DynamicFormService) => {
    expect(service).toBeTruthy();
  }));
});
