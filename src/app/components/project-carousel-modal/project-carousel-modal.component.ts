import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';

@Component({
  selector: 'app-project-carousel-modal',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './project-carousel-modal.component.html',
  styleUrls: ['./project-carousel-modal.component.scss']
})
export class ProjectCarouselModalComponent {
  @Input() images: string[] = [];
  isOpen = false;

  open(images: string[]) {
    this.images = images;
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}