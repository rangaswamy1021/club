import { TestBed } from '@angular/core/testing';

import { SLNavigationService } from './navigation.service';

describe('NavigationService', () => {
  let service: SLNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SLNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
