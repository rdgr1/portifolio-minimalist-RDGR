import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';

@Component({
    selector: 'app-carrousel-layout',
    imports: [CommonModule],
    templateUrl: './carrousel-layout.component.html',
    styleUrl: './carrousel-layout.component.scss'
})
export class CarrouselLayoutComponent implements AfterViewInit {
  @ViewChild('slider') slider!: ElementRef;

  ngAfterViewInit() {
    const sliderElement = this.slider.nativeElement;

    sliderElement.addEventListener('mouseenter', () => {
      sliderElement.style.animationPlayState = 'paused'; // Pausa a animação corretamente
    });

    sliderElement.addEventListener('mouseleave', () => {
      sliderElement.style.animationPlayState = 'running'; // Retoma a animação sem resetar
    });
  }
}
