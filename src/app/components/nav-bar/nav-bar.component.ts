import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements AfterViewInit {
  activeLink: string = 'inicio';
  isMenuOpen: boolean = false;
  isInProjectSection: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isInProjectSection = this.router.url === '/projetos';
      this.isMenuOpen = false; // Fecha o menu ao mudar de página
    });
  }

  setActiveLink(link: string): void {
    this.activeLink = link;
    this.isMenuOpen = false; // Fecha o menu ao clicar em um link
  }

  // ✅ Método para alternar o menu
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // ✅ Método chamado após a renderização do HTML
  ngAfterViewInit(): void {
    const btnMobile = document.querySelector('.btn-mobile'); // Corrigido para classe

    if (btnMobile) {
      btnMobile.addEventListener('click', () => this.toggleMenu());
    }
  }
}