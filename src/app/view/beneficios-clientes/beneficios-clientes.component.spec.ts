import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosClientesComponent } from './beneficios-clientes.component';

describe('BeneficiosClientesComponent', () => {
  let component: BeneficiosClientesComponent;
  let fixture: ComponentFixture<BeneficiosClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeneficiosClientesComponent]
    });
    fixture = TestBed.createComponent(BeneficiosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
