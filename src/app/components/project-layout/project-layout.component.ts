import { Component } from '@angular/core';
import { CardProjetoComponent } from "../card-projeto/card-projeto.component";
import { SetaComponentComponent } from "../seta-component/seta-component.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-layout',
  standalone: true,
  imports: [CardProjetoComponent, SetaComponentComponent],
  templateUrl: './project-layout.component.html',
  styleUrl: './project-layout.component.scss'
})
export class ProjectLayoutComponent {
  constructor(private router: Router){}
  navigate(){
    this.router.navigate(['contato'])
  }
}
