import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  isInProjectSection: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isInProjectSection = this.router.url === '/projetos';
    })}
  activeLink: string = 'sobremim';
  setActiveLink(link: string): void{
    this.activeLink = link;
  }
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const projectSection = document.getElementById('projetos');
    if (projectSection) {
      const rect = projectSection.getBoundingClientRect();
      this.isInProjectSection = rect.top <= window.innerHeight && rect.bottom >= 0;
    }
  }
}

