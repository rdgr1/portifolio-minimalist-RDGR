import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomThemeComponent } from './buttom-theme.component';

describe('ButtomThemeComponent', () => {
  let component: ButtomThemeComponent;
  let fixture: ComponentFixture<ButtomThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtomThemeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtomThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
