import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCarouselModalComponent } from './project-carousel-modal.component';

describe('ProjectCarouselModalComponent', () => {
  let component: ProjectCarouselModalComponent;
  let fixture: ComponentFixture<ProjectCarouselModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCarouselModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCarouselModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
