import { CommonModule } from '@angular/common';
import { Component, HostListener ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent {
  activeLink: string = 'inicio';
  screenWidth: number = 0;
  isMenuOpen: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth > 768) {
        this.isMenuOpen = false; // Fecha o menu em telas grandes
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log("Menu toggled:", this.isMenuOpen); // ✅ Verifica no console se está funcionando
  }  

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      this.activeLink = sectionId;
      this.isMenuOpen = false; // Fecha o menu após clicar
    }
  }
}
