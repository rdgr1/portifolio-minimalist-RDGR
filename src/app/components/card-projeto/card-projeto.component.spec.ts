import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjetoComponent } from './card-projeto.component';

describe('CardProjetoComponent', () => {
  let component: CardProjetoComponent;
  let fixture: ComponentFixture<CardProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProjetoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
