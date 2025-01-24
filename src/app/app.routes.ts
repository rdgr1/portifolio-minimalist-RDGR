import { Routes } from '@angular/router';
import { HeaderIndexComponent } from './components/header-index/header-index.component';
import { TestComponent } from './pages/test/test.component';
import { ProjectLayoutComponent } from './components/project-layout/project-layout.component';

export const routes: Routes = [{
    "path":"index",
    "component": HeaderIndexComponent,
    "pathMatch":'full'
},{
    "path":"sobre",
    "component": TestComponent,
    "pathMatch":'full'
}
,{
    "path":"projetos",
    "component": ProjectLayoutComponent,
    "pathMatch":'full'
}];
