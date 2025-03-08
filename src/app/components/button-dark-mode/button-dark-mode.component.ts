import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, AfterViewInit, PLATFORM_ID } from '@angular/core';

@Component({
    selector: 'app-button-dark-mode',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button-dark-mode.component.html',
    styleUrls: ['./button-dark-mode.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDarkModeComponent implements AfterViewInit {
  isRendered: boolean = false;
  isActive: boolean = false;
  isBrowser: boolean = false;

  constructor(private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      console.log('Rodando no navegador!');
      this.isRendered = true;
      this.isActive = localStorage.getItem('dark-mode') === 'true'; // Recupera estado salvo
      this.applyTheme();
      this.cdr.detectChanges(); // Força atualização do Angular
    }
  }

  toggleButton(): void {
    this.isActive = !this.isActive;
    localStorage.setItem('dark-mode', String(this.isActive)); // Salva estado no localStorage
    this.applyTheme();
  }

  applyTheme(): void {
    const root = document.documentElement;
    if (this.isActive) {
      root.style.setProperty('--black', 'black');
      root.style.setProperty('--white', 'white');
    } else {
      root.style.setProperty('--black', 'white');
      root.style.setProperty('--white', 'black');
    }
  }
}
