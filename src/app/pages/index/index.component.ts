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
  isScrolled: boolean = false;
  isDarkMode: boolean = false;
  isHovered: boolean = false;
  constructor(){}
  toggleDarkMode(): void{
    this.isDarkMode = !this.isDarkMode;
  }
  scrollToSection(sectionId: string):void{
    document.getElementById(sectionId)?.scrollIntoView({behavior:'smooth'});
  }
}
