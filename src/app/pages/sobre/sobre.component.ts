import { Component } from '@angular/core';
import { SobreMimComponent } from "../../components/sobre-mim/sobre-mim.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { SetaComponentComponent } from "../../components/seta-component/seta-component.component";

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [SobreMimComponent, NavBarComponent, SetaComponentComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {
  constructor(){}
  scrollToSection(sectionId: string):void{
    document.getElementById(sectionId)?.scrollIntoView({behavior:'smooth'});
  }
}
