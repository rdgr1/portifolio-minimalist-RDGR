import { Component } from '@angular/core';
import { CardProjetoComponent } from "../card-projeto/card-projeto.component";
import { SetaComponentComponent } from "../seta-component/seta-component.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-layout',
  standalone: true,
  imports: [CardProjetoComponent, SetaComponentComponent, NavBarComponent,CommonModule],
  templateUrl: './project-layout.component.html',
  styleUrl: './project-layout.component.scss'
})
export class ProjectLayoutComponent {
  isHovered : boolean = false;
  constructor(private router:Router){}
navigateTo(){
  this.router.navigate(['contato'])
}
}
