import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

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
  @Input() disableLink: boolean = false;
  @Input() disableImg: boolean = false;
  @Input() disableGithub : boolean = false;
  @Output() openCarousel = new EventEmitter<void>();

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  toggleMobileDescription(event: Event) {
    event.stopPropagation();
    this.isMobileActive = !this.isMobileActive;
  }

  @HostListener('document:click', ['$event'])
  closeDescription(event: Event) {
    const targetElement = event.target as HTMLElement;
    if (!targetElement.closest('.container-card')) {
      this.isMobileActive = false;
    }
  }

  openCarouselModal(event: Event) {
    event.stopPropagation();
    this.openCarousel.emit();
  }
}