import { Component } from '@angular/core';
import { FormularioLayoutComponent } from "../../components/formulario-layout/formulario-layout.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { SetaComponentComponent } from "../../components/seta-component/seta-component.component";

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormularioLayoutComponent, NavBarComponent, SetaComponentComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
constructor(){
}
scrollToSection(sectionId: string):void{
  document.getElementById(sectionId)?.scrollIntoView({behavior:'smooth'});
}
}
