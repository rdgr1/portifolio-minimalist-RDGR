import { Component } from '@angular/core';

@Component({
  selector: 'app-button-dark-mode',
  standalone: true,
  imports: [],
  templateUrl: './button-dark-mode.component.html',
  styleUrls: ['./button-dark-mode.component.scss'],
})
export class ButtonDarkModeComponent {
  isActive: boolean = false; // Estado inicial do botão

  toggleButton(): void {
    this.isActive = !this.isActive; // Alterna o estado do botão (ativo/inativo)
  }
}
