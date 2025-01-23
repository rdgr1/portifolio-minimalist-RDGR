import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { SobreMimComponent } from "../../components/sobre-mim/sobre-mim.component";
import { SetaComponentComponent } from "../../components/seta-component/seta-component.component";
import { ButtonDarkModeComponent } from "../../components/button-dark-mode/button-dark-mode.component";

@Component({
  selector: 'app-sobre-mim-page',
  standalone: true,
  imports: [NavBarComponent, SobreMimComponent, SetaComponentComponent, ButtonDarkModeComponent],
  templateUrl: './sobre-mim-page.component.html',
  styleUrl: './sobre-mim-page.component.scss'
})
export class SobreMimPageComponent {

}
