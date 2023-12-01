/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JwtserviceService } from './jwtservice.service';

describe('Service: Jwtservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JwtserviceService]
    });
  });

  it('should ...', inject([JwtserviceService], (service: JwtserviceService) => {
    expect(service).toBeTruthy();
  }));
});
