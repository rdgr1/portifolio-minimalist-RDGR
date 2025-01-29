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
    this.isActive = !this.isActive;
    this.toggleTheme() // Alterna o estado do botão (ativo/inativo)
  }
  toggleTheme(){
    const root = document.documentElement;
    if(this.isActive) {
      root.style.setProperty('--black','#fffff');
      root.style.setProperty('--white','#00000');
    } else {
      root.style.setProperty('--black','#00000');
      root.style.setProperty('--white','#fffff');
    }
  }
}
