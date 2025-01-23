import { Component } from '@angular/core';
import { LanguageStatusBarComponent } from '../language-status-bar/language-status-bar.component';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-sobre-mim',
  standalone: true,
  imports: [LanguageStatusBarComponent, NavBarComponent],
  templateUrl: './sobre-mim.component.html',
  styleUrl: './sobre-mim.component.scss'
})
export class SobreMimComponent {

}
