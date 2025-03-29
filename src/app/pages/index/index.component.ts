import { Component, HostListener, Inject, Input, PLATFORM_ID } from '@angular/core';
import { HeaderIndexComponent } from "../../components/header-index/header-index.component";
import { SetaComponentComponent } from "../../components/seta-component/seta-component.component";
import { ButtonDarkModeComponent } from "../../components/button-dark-mode/button-dark-mode.component";
import { Router } from '@angular/router';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SliderLogoComponent } from "../../components/slider-logo/slider-logo.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HeaderIndexComponent, SetaComponentComponent, ButtonDarkModeComponent, NavBarComponent, CommonModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
isScrolled: boolean = false;
@Input() isDarkMode: boolean = true;
isHovered: boolean = false;
isMobile: boolean = false; // 🔹 Inicializa sem window.innerWidth

constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: object) {
  // 🔹 Só acessa `window` se estiver rodando no navegador
  if (isPlatformBrowser(this.platformId)) {
    this.isMobile = window.innerWidth <= 768;
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