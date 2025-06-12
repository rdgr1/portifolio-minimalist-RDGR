import { Component } from '@angular/core';
import { LanguageStatusBarComponent } from '../language-status-bar/language-status-bar.component';

@Component({
    selector: 'app-sobre-mim',
    standalone: true,
    imports: [LanguageStatusBarComponent],
    templateUrl: './sobre-mim.component.html',
    styleUrls: ['./sobre-mim.component.scss']
})
export class SobreMimComponent {

}
