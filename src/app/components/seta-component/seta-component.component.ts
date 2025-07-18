import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-seta-component',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './seta-component.component.html',
    styleUrls: ['./seta-component.component.scss']
})
export class SetaComponentComponent {
@Output() navigate = new EventEmitter<void>();

onNavigate(){
  this.navigate.emit();
}
}
