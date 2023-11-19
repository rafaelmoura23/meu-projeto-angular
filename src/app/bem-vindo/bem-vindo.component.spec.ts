import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BemVindoComponent } from './bem-vindo.component';

describe('BemVindoComponent', () => {
  let component: BemVindoComponent;
  let fixture: ComponentFixture<BemVindoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BemVindoComponent]
    });
    fixture = TestBed.createComponent(BemVindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
