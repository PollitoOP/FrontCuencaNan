import { TestBed } from '@angular/core/testing';
import { TipoeventosService } from './tipo-eventos.service';


describe('TipoeventosService', () => {
  let service: TipoeventosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoeventosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
