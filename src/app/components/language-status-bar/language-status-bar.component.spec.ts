import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageStatusBarComponent } from './language-status-bar.component';

describe('LanguageStatusBarComponent', () => {
  let component: LanguageStatusBarComponent;
  let fixture: ComponentFixture<LanguageStatusBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageStatusBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageStatusBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
