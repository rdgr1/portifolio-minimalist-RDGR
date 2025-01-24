import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-projeto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-projeto.component.html',
  styleUrl: './card-projeto.component.scss'
})
export class CardProjetoComponent {
@Input() title:string = "";
@Input() text:string = "";
@Input() linkImg:string = "";
} 
