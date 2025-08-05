import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-social-media',
  imports: [CommonModule],
  templateUrl: './card-social-media.component.html',
  styleUrl: './card-social-media.component.scss'
})
export class CardSocialMediaComponent {
@Input() variant: string = '';
@Input() linkNav: string = '';
@Input() linkImg: string = '';
@Input() title: string = '';
@Input() username: string = '';
@Input() background: string = '';
}
