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
}

