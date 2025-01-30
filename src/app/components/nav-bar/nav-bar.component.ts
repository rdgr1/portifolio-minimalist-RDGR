import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private router: Router){}
  activeLink: string = 'sobremim';
  setActiveLink(link: string): void{
    this.activeLink = link;
  }
}
