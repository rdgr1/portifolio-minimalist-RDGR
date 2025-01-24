import { Component } from '@angular/core';
import { SobreMimComponent } from "../../components/sobre-mim/sobre-mim.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { SetaComponentComponent } from "../../components/seta-component/seta-component.component";
import { CardProjetoComponent } from "../../components/card-projeto/card-projeto.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [SobreMimComponent, NavBarComponent, SetaComponentComponent, CardProjetoComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

}
