import { Routes } from '@angular/router';
import { HeaderIndexComponent } from './components/header-index/header-index.component';
import { SobreMimComponent } from './components/sobre-mim/sobre-mim.component';
import { SobreMimPageComponent } from './pages/sobre-mim-page/sobre-mim-page.component';

export const routes: Routes = [{
    "path":"index",
    "component": HeaderIndexComponent,
    "pathMatch":'full'
},{
    "path":"sobre",
    "component": SobreMimPageComponent,
    "pathMatch":'full'
}];
