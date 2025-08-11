import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ExpComponent } from './pages/exp/exp.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    component: IndexComponent,
    pathMatch: 'full'
  },
  {
    path: 'sobre',
    component: SobreComponent,
    pathMatch: 'full'
  },
  {
    path: 'projetos',
    component: ProjetosComponent,
    pathMatch: 'full'
  },
  {
    path: 'contato',
    component: FormularioComponent,
    pathMatch: 'full'
  },
  {
    path: 'exp',
    component: ExpComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/inicio'
  },
];
