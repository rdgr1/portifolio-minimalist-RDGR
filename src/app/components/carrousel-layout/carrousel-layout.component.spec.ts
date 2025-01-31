import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselLayoutComponent } from './carrousel-layout.component';

describe('CarrouselLayoutComponent', () => {
  let component: CarrouselLayoutComponent;
  let fixture: ComponentFixture<CarrouselLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrouselLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
