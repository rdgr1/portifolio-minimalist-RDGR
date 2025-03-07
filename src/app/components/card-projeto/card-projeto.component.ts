import { CommonModule } from '@angular/common';
import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-card-projeto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-projeto.component.html',
  styleUrls: ['./card-projeto.component.scss']
})
export class CardProjetoComponent {
  isHovered: boolean = false;
  isMobileActive: boolean = false;

  @Input() title: string = "";
  @Input() text: string = "";
  @Input() linkImg: string = "";
  @Input() linkProject: string = "";
  @Input() linkGithub: string = "";

  // 📌 Hover para desktop
  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  // 📌 Alternar descrição no mobile ao toque
  toggleMobileDescription(event: Event) {
    event.stopPropagation(); // Impede que o evento se propague e feche imediatamente
    this.isMobileActive = !this.isMobileActive;
  }

  // 📌 Fechar descrição no mobile ao tocar fora
  @HostListener('document:click', ['$event'])
  closeDescription(event: Event) {
    const targetElement = event.target as HTMLElement;
    if (!targetElement.closest('.container-card')) {
      this.isMobileActive = false;
    }
  }
}