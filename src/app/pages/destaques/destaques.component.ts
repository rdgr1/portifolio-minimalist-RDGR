import { Component } from '@angular/core';
import { CarrouselLayoutComponent } from "../../components/carrousel-layout/carrousel-layout.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { SetaComponentComponent } from "../../components/seta-component/seta-component.component";
import { SliderLogoComponent } from "../../components/slider-logo/slider-logo.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-destaques',
  standalone: true,
  imports: [CarrouselLayoutComponent, NavBarComponent, SetaComponentComponent, SliderLogoComponent],
  templateUrl: './destaques.component.html',
  styleUrl: './destaques.component.scss'
})
export class DestaquesComponent {
constructor(private router: Router){}
navigate(){
  this.router.navigate(['projetos'])
}
}
