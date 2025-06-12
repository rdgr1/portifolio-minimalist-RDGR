import { Component } from '@angular/core';
import { FormularioLayoutComponent } from "../../components/formulario-layout/formulario-layout.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { SetaComponentComponent } from "../../components/seta-component/seta-component.component";
import { Router } from '@angular/router';
import { SliderLogoComponent } from "../../components/slider-logo/slider-logo.component";

@Component({
    selector: 'app-formulario',
    standalone: true,
    imports: [FormularioLayoutComponent, NavBarComponent, SetaComponentComponent, SliderLogoComponent],
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
constructor(private router : Router){
}
navigateTo(){
  this.router.navigate(['inicio'])
}
}
