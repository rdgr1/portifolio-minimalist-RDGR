import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, AfterViewInit, PLATFORM_ID, OnInit } from '@angular/core';

@Component({
    selector: 'app-button-dark-mode',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button-dark-mode.component.html',
    styleUrls: ['./button-dark-mode.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDarkModeComponent implements AfterViewInit, OnInit{
    isRendered = false;
    isActive = false;
    isBrowser = false;
  
    constructor(private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) private platformId: Object) {}
  
    ngOnInit(): void {
      this.isBrowser = isPlatformBrowser(this.platformId);
  
      if (this.isBrowser) {
        this.isActive = localStorage.getItem('dark-mode') === 'true';
        this.applyTheme(); // Aplica imediatamente ao iniciar
      }
    }
  
    ngAfterViewInit(): void {
      if (this.isBrowser) {
        this.isRendered = true;
        this.cdr.detectChanges();
      }
    }
  
    toggleButton(): void {
      this.isActive = !this.isActive;
      localStorage.setItem('dark-mode', String(this.isActive));
      this.applyTheme();
    }
  
    applyTheme(): void {
      const root = document.documentElement;
  
      root.style.transition = 'background-color 0.4s ease-in-out, color 0.4s ease-in-out';
  
      if (this.isActive) {
        root.style.setProperty('--black', 'black');
        root.style.setProperty('--white', 'white');
      } else {
        root.style.setProperty('--black', 'white');
        root.style.setProperty('--white', 'black');
      }
    }
}
