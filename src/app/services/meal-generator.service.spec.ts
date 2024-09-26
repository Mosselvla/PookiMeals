import { TestBed } from '@angular/core/testing';

import { MealGeneratorService } from './meal-generator.service';

describe('MealGeneratorService', () => {
  let service: MealGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
