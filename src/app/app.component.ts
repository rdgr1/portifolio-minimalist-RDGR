import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderIndexComponent } from "./components/header-index/header-index.component";
import { IndexComponent } from "./pages/index/index.component";
import { SobreComponent } from "./pages/sobre/sobre.component";
import { ProjetosComponent } from "./pages/projetos/projetos.component";
import { FormularioComponent } from "./pages/formulario/formulario.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, IndexComponent, SobreComponent, ProjetosComponent, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portifolio-minimalist-RDGR';
}
