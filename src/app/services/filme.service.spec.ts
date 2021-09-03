import { TestBed } from '@angular/core/testing';

import { FilmeService } from './filme.service';

describe('FilmeService', () => {
  let service: FilmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmeService);
  });

  it('deve criar a service', () => {
    expect(service).toBeTruthy();
  });
});
