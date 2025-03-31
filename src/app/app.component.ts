import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('routeFade', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('300ms ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent {
  ngAfterViewInit(): void {
    setTimeout(() => {
      document.querySelector('header')?.classList.add('fade-in');
      document.querySelector('.subtitle-container')?.classList.add('fade-in');
      document.querySelector('.icons-container')?.classList.add('fade-in');
    }, 100);
  }
  title = 'portifolio-minimalist-RDGR';
}
