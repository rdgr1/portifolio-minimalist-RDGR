import { Component } from '@angular/core';
import { FormularioLayoutComponent } from "../../components/formulario-layout/formulario-layout.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { InputFormularioComponent } from '../../components/input-formulario/input-formulario.component';
import { SetaComponentComponent } from "../../components/seta-component/seta-component.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormularioLayoutComponent, NavBarComponent, SetaComponentComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
constructor(private router: Router){
}
navigate(){
  this.router.navigate(['sobre'])
}
}
