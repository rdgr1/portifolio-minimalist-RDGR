import { CommonModule } from '@angular/common';
import { Component ,ViewEncapsulation} from '@angular/core';
import { RouterModule , Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent {
  activeLink: string = 'inicio';
  screenWidth: number = 0;
  isMenuOpen: boolean = false;
  isInProjectSection: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isInProjectSection = this.router.url === '/projetos';
    })}
    setActiveLink(link: string): void{
    this.activeLink = link;
}
}
