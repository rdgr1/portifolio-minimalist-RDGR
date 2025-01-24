import { Component } from '@angular/core';
import { FormularioLayoutComponent } from "../../components/formulario-layout/formulario-layout.component";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormularioLayoutComponent, ReactiveFormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

}
