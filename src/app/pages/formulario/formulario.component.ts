import { Component } from '@angular/core';
import { FormularioLayoutComponent } from "../../components/formulario-layout/formulario-layout.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { InputFormularioComponent } from '../../components/input-formulario/input-formulario.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormularioLayoutComponent, NavBarComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

}
