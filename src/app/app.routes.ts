import { provideRouter, Routes } from '@angular/router';
import { ProjetosComponent } from './pages/projetos/projetos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  {
    path: 'test',
    component: ProjetosComponent,
    pathMatch: 'full'
  }
];
