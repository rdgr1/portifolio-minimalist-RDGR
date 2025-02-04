import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  activeLink: string = 'inicio'; // Define o primeiro link ativo

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      this.activeLink = sectionId; // Atualiza o link ativo ao clicar
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const sections = ['inicio', 'sobre', 'projetos', 'formulario'];

    let currentSection = sections[0]; // Padrão para a primeira seção

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        // Se metade da seção estiver visível, ela é a ativa
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = sectionId;
        }
      }
    }

    this.activeLink = currentSection;
  }
}
