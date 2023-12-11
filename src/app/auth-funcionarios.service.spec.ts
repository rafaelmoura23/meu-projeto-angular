import { TestBed } from '@angular/core/testing';

import { AuthFuncionariosService } from './auth-funcionarios.service';

describe('AuthFuncionariosService', () => {
  let service: AuthFuncionariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthFuncionariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
