import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderLogoComponent } from './slider-logo.component';

describe('SliderLogoComponent', () => {
  let component: SliderLogoComponent;
  let fixture: ComponentFixture<SliderLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
