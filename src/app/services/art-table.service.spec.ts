import { TestBed } from '@angular/core/testing';

import { ArtTableService } from './art-table.service';

describe('ArtTableService', () => {
  let service: ArtTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
