import { provideRouter, Routes } from '@angular/router';
import { ProjectLayoutComponent } from './components/project-layout/project-layout.component';
import { IndexComponent } from './pages/index/index.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { DestaquesComponent } from './pages/destaques/destaques.component';

export const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  {
    path: 'index',
    component: IndexComponent,
    pathMatch: 'full',
  },
  {
    path: 'sobre',
    component: SobreComponent,
    pathMatch: 'full',
  },
  { path: 'projetos',
    component: ProjetosComponent,
    pathMatch: 'full',
  },
  {
    path: 'contato',
    component: FormularioComponent,
    pathMatch: 'full',
  }
];
