/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoggedInGardService } from './logged-in-gard.service';

describe('Service: LoggedInGard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedInGardService]
    });
  });

  it('should ...', inject([LoggedInGardService], (service: LoggedInGardService) => {
    expect(service).toBeTruthy();
  }));
});
