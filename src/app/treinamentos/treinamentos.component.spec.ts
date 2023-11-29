import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinamentosComponent } from './treinamentos.component';

describe('TreinamentosComponent', () => {
  let component: TreinamentosComponent;
  let fixture: ComponentFixture<TreinamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreinamentosComponent]
    });
    fixture = TestBed.createComponent(TreinamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
