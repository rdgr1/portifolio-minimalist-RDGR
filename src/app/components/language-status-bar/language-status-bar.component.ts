import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-language-status-bar',
    imports: [],
    templateUrl: './language-status-bar.component.html',
    styleUrls: ['./language-status-bar.component.scss']
})
export class LanguageStatusBarComponent implements OnInit {
  barLevels = [
    { class: 'level1', width: '50%' },
    { class: 'level2', width: '85%' },
    { class: 'level3', width: '40%' },
    { class: 'level4', width: '60%' },
    { class: 'level5', width: '40%' },
    { class: 'level6', width: '60%' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.barLevels.forEach((bar) => {
        const barElement = document.querySelector(`.${bar.class}`) as HTMLElement;
        if (barElement) {
          setTimeout(() => {
            barElement.style.width = bar.width; // Define a largura
          }, 200); // Adicione um pequeno atraso para a animação
        }
      });
    }
  }
}
