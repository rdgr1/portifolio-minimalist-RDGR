import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioLayoutComponent } from "../../components/formulario-layout/formulario-layout.component";
import { CommonModule } from '@angular/common';
import { InputFormularioComponent } from '../../components/input-formulario/input-formulario.component';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ReactiveFormsModule, FormularioLayoutComponent, CommonModule, NavBarComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

}
