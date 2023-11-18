import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBemAvaliadosComponent } from './carousel-bem-avaliados.component';

describe('CarouselBemAvaliadosComponent', () => {
  let component: CarouselBemAvaliadosComponent;
  let fixture: ComponentFixture<CarouselBemAvaliadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselBemAvaliadosComponent]
    });
    fixture = TestBed.createComponent(CarouselBemAvaliadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
