import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMimPageComponent } from './sobre-mim-page.component';

describe('SobreMimPageComponent', () => {
  let component: SobreMimPageComponent;
  let fixture: ComponentFixture<SobreMimPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreMimPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreMimPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
