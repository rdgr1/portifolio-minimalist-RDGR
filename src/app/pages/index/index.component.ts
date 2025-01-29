import { Component } from '@angular/core';
import { HeaderIndexComponent } from "../../components/header-index/header-index.component";
import { SetaComponentComponent } from "../../components/seta-component/seta-component.component";
import { ButtonDarkModeComponent } from "../../components/button-dark-mode/button-dark-mode.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HeaderIndexComponent, SetaComponentComponent, ButtonDarkModeComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
