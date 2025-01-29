import { Routes } from '@angular/router';
import { ProjectLayoutComponent } from './components/project-layout/project-layout.component';
import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [{
    "path":"index",
    "component": IndexComponent,
    "pathMatch":'full'
}
,{
    "path":"projetos",
    "component": ProjectLayoutComponent,
    "pathMatch":'full'
}];
