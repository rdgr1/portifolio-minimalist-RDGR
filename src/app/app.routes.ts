import { Routes } from '@angular/router';
import { HeaderIndexComponent } from './components/header-index/header-index.component';
import { SobreMimComponent } from './components/sobre-mim/sobre-mim.component';

export const routes: Routes = [{
    "path":"index",
    "component": HeaderIndexComponent,
    "pathMatch":'full'
},{
    "path":"sobre",
    "component": SobreMimComponent,
    "pathMatch":'full'
}];
