import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormularioComponent } from './input-formulario.component';

describe('InputFormularioComponent', () => {
  let component: InputFormularioComponent;
  let fixture: ComponentFixture<InputFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
