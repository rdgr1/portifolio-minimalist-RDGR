import { Component } from '@angular/core';
import { HeaderIndexComponent } from "../../components/header-index/header-index.component";
import { SetaComponentComponent } from "../../components/seta-component/seta-component.component";
import { ButtonDarkModeComponent } from "../../components/button-dark-mode/button-dark-mode.component";
import { Router } from '@angular/router';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HeaderIndexComponent, SetaComponentComponent, ButtonDarkModeComponent, NavBarComponent,CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  isDarkMode: boolean = false;
  isHovered: boolean = false;
  constructor(private router: Router){}
  toggleDarkMode(): void{
    this.isDarkMode = !this.isDarkMode;
  }
  navigate(): void{
    this.router.navigate(["sobre"])
  }
}
