import {
  Component, OnInit, AfterViewInit,
  PLATFORM_ID, Inject, ElementRef,
  QueryList, ViewChildren
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-language-status-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-status-bar.component.html',
  styleUrls: ['./language-status-bar.component.scss']
})
export class LanguageStatusBarComponent implements OnInit, AfterViewInit {
  @ViewChildren('barRef') barRefs!: QueryList<ElementRef>;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  barLevels = [
    { width: '70%', label: 'Angular', color: '#b71c1c', iconClass: '', cssClass: 'level1' },
    { width: '80%', label: 'Java', color: '#ea4134', iconClass: '', cssClass: 'level2' },
    { width: '50%', label: 'Type', color: '#1976d2', iconClass: '', cssClass: 'level3' },
    { width: '60%', label: 'Python', color: '#ffc107', iconClass: '', cssClass: 'level4' },
    { width: '40%', label: 'Postgres', color: '#0277bd', iconClass: '', cssClass: 'level5' },
    { width: '70%', label: 'Spring', color: '#8bc34a', iconClass: '', cssClass: 'level6' },
    { width: '40%', label: 'Kotlin', color: '#6777fa', iconClass: 'kotlin-icon', cssClass: 'level7' },
    { width: '70%', label: 'Sass', color: '#f46494', iconClass: 'sass-icon', cssClass: 'level8' },
  ];

  displayedPercents: number[] = [];

  ngOnInit(): void {
    this.displayedPercents = this.barLevels.map(() => 0);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.barRefs.forEach((el, i) => {
        const width = this.barLevels[i].width;
        const value = parseInt(width);
        setTimeout(() => {
          el.nativeElement.style.width = width;
          this.animatePercentage(i, value);
        }, 200);
      });
    }
  }

  animatePercentage(index: number, target: number) {
    let current = 0;
    const interval = setInterval(() => {
      if (current >= target) {
        this.displayedPercents[index] = target;
        clearInterval(interval);
      } else {
        this.displayedPercents[index] = current;
        current++;
      }
    }, 10); // 70% = 700ms (sincronizado com 1s da barra)
  }

  getStars(width: string): number[] {
    const percent = parseInt(width);
    const stars = Math.round(percent / 20);
    return Array(stars).fill(0);
  }
}