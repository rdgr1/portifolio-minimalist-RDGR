import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLayoutComponent } from './formulario-layout.component';

describe('FormularioLayoutComponent', () => {
  let component: FormularioLayoutComponent;
  let fixture: ComponentFixture<FormularioLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
