import { Component, HostListener } from '@angular/core';
import { HeaderIndexComponent } from "../../components/header-index/header-index.component";
import { SetaComponentComponent } from "../../components/seta-component/seta-component.component";
import { ButtonDarkModeComponent } from "../../components/button-dark-mode/button-dark-mode.component";
import { Router } from '@angular/router';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-index',
    imports: [HeaderIndexComponent, SetaComponentComponent, ButtonDarkModeComponent, NavBarComponent, CommonModule],
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  isScrolled: boolean = false;
  isDarkMode: boolean = false;
  isHovered: boolean = false;
  isMobile: boolean = window.innerWidth <= 768; // 🔹 Define se é mobile ou desktop

  constructor(private router: Router) {}

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
  }

  navigateTo() {
    this.router.navigate(['sobre']);
  }

  // 🔹 Aplica hover SOMENTE no desktop
  setHovered(state: boolean): void {
    if (!this.isMobile) { 
      this.isHovered = state;
    }
  }

  // 🔹 Atualiza se é mobile ao redimensionar a tela
  @HostListener('window:resize', [])
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }
}