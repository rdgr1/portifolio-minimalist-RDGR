import {
  Component,
  HostListener,
  Inject,
  Input,
  PLATFORM_ID,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { HeaderIndexComponent } from '../../components/header-index/header-index.component';
import { SetaComponentComponent } from '../../components/seta-component/seta-component.component';
import { ButtonDarkModeComponent } from '../../components/button-dark-mode/button-dark-mode.component';
import { Router } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SliderLogoComponent } from '../../components/slider-logo/slider-logo.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    HeaderIndexComponent,
    SetaComponentComponent,
    ButtonDarkModeComponent,
    NavBarComponent,
    CommonModule,
  ],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit, AfterViewInit {
  isScrolled: boolean = false;
  @Input() isDarkMode: boolean = true;
  isHovered: boolean = false;
  isMobile: boolean = false; // 🔹 Inicializa sem window.innerWidth

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    // 🔹 Só acessa `window` se estiver rodando no navegador
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = localStorage.getItem('dark-mode') === 'true';
      this.updateMeshColors();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const inter = document.querySelector<HTMLDivElement>('.interactive');
      if (!inter) return;
      let curX = 0;
      let curY = 0;
      let tgX = 0;
      let tgY = 0;

      const move = () => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        inter.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
      };

      window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
      });

      move();
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    this.updateMeshColors();
  }

  navigateTo() {
    this.router.navigate(['sobre']);
  }

  setHovered(state: boolean): void {
    if (!this.isMobile) {
      this.isHovered = state;
    }
  }

  @HostListener('window:resize', [])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    }
  }

  private updateMeshColors(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const root = document.documentElement;
    const container = document.querySelector<HTMLElement>('.container');
    if (!container) return;
    const style = getComputedStyle(root);
    const hex = style.getPropertyValue('--highlight').trim();
    const rgb = this.parseColor(hex);
    if (!rgb) return;
    const complement = {
      r: 255 - rgb.r,
      g: 255 - rgb.g,
      b: 255 - rgb.b,
    };
    const comp = `${complement.r}, ${complement.g}, ${complement.b}`;
    container.style.setProperty('--color-interactive', comp);
    container.style.setProperty('--color1', comp);
    container.style.setProperty(
      '--color2',
      `${Math.max(0, complement.r - 30)}, ${Math.max(0, complement.g - 30)}, ${Math.max(0, complement.b - 30)}`,
    );
    container.style.setProperty(
      '--color3',
      `${Math.min(255, complement.r + 30)}, ${Math.min(255, complement.g + 30)}, ${Math.min(255, complement.b + 30)}`,
    );
    container.style.setProperty(
      '--color4',
      `${Math.max(0, complement.r - 60)}, ${Math.max(0, complement.g - 60)}, ${Math.max(0, complement.b - 60)}`,
    );
    container.style.setProperty(
      '--color5',
      `${Math.min(255, complement.r + 60)}, ${Math.min(255, complement.g + 60)}, ${Math.min(255, complement.b + 60)}`,
    );

    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    if (brightness < 128) {
      container.style.setProperty('--color-bg1', 'rgb(255,255,255)');
      container.style.setProperty('--color-bg2', 'rgb(200,200,200)');
    } else {
      container.style.setProperty('--color-bg1', 'rgb(0,0,0)');
      container.style.setProperty('--color-bg2', 'rgb(60,60,60)');
    }
  }

  private parseColor(value: string): { r: number; g: number; b: number } | null {
    if (value.startsWith('#')) {
      const hex = value.slice(1);
      const full = hex.length === 3
        ? hex.split('').map((c) => c + c).join('')
        : hex;
      const int = parseInt(full, 16);
      if (isNaN(int)) return null;
      return {
        r: (int >> 16) & 255,
        g: (int >> 8) & 255,
        b: int & 255,
      };
    } else if (value.startsWith('rgb')) {
      const match = value.match(/\d+/g);
      if (!match) return null;
      const [r, g, b] = match.map(Number);
      return { r, g, b };
    } else if (value === 'black') {
      return { r: 0, g: 0, b: 0 };
    } else if (value === 'white') {
      return { r: 255, g: 255, b: 255 };
    }
    return null;
  }
}

