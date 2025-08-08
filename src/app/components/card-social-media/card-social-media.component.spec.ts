import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSocialMediaComponent } from './card-social-media.component';

describe('CardSocialMediaComponent', () => {
  let component: CardSocialMediaComponent;
  let fixture: ComponentFixture<CardSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSocialMediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
