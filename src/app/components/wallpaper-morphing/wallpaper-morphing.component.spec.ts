import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallpaperMorphingComponent } from './wallpaper-morphing.component';

describe('WallpaperMorphingComponent', () => {
  let component: WallpaperMorphingComponent;
  let fixture: ComponentFixture<WallpaperMorphingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WallpaperMorphingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WallpaperMorphingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
