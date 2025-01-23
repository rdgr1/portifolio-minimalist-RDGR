import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetaComponentComponent } from './seta-component.component';

describe('SetaComponentComponent', () => {
  let component: SetaComponentComponent;
  let fixture: ComponentFixture<SetaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
