import { CommonModule } from '@angular/common';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-exp',
  imports: [CommonModule],
  templateUrl: './card-exp.component.html',
  styleUrl: './card-exp.component.scss'
})
export class CardExpComponent {
@Input() title: string = '';
@Input() subtitle: string = '';
@Input() text: string = '';
@Input() date: string = '';
@Input() pos: string = '';
@Input() link: string = '';
}
