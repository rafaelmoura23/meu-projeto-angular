import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPatrocinadoresComponent } from './cards-patrocinadores.component';

describe('CardsPatrocinadoresComponent', () => {
  let component: CardsPatrocinadoresComponent;
  let fixture: ComponentFixture<CardsPatrocinadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsPatrocinadoresComponent]
    });
    fixture = TestBed.createComponent(CardsPatrocinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
