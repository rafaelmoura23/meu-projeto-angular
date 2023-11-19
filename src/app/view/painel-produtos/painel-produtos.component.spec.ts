import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelProdutosComponent } from './painel-produtos.component';

describe('PainelProdutosComponent', () => {
  let component: PainelProdutosComponent;
  let fixture: ComponentFixture<PainelProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelProdutosComponent]
    });
    fixture = TestBed.createComponent(PainelProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
