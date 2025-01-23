import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDarkModeComponent } from './button-dark-mode.component';

describe('ButtonDarkModeComponent', () => {
  let component: ButtonDarkModeComponent;
  let fixture: ComponentFixture<ButtonDarkModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDarkModeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDarkModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
