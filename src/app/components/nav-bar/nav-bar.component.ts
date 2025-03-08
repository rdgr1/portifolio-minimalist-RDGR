import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, AfterViewInit, Inject, PLATFORM_ID, Renderer2, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-nav-bar',
    imports: [CommonModule, RouterModule],
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements AfterViewInit, OnDestroy {
  @ViewChild('btnMobile', { static: false }) btnMobile!: ElementRef;

  activeLink: string = 'inicio';
  isMenuOpen: boolean = false;
  isInProjectSection: boolean = false;
  isBrowser: boolean;
  private btnMobileListener: (() => void) | null = null; // Guarda referência do evento

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    this.router.events.subscribe(() => {
      this.isInProjectSection = this.router.url === '/projetos';
      this.isMenuOpen = false; // Fecha o menu ao mudar de página
    });
  }

  setActiveLink(link: string): void {
    this.activeLink = link;
    this.isMenuOpen = false; // Fecha o menu ao clicar em um link
  }

  // ✅ Método para alternar o menu
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // ✅ Método chamado após a renderização do HTML
  ngAfterViewInit(): void {
    if (this.isBrowser && this.btnMobile) {
      // Remove o evento antigo antes de adicionar um novo (evita múltiplos eventos)
      if (this.btnMobileListener) {
        this.btnMobileListener();
      }

      // Adiciona evento de clique e armazena referência para removê-lo depois
      this.btnMobileListener = this.renderer.listen(this.btnMobile.nativeElement, 'click', () => this.toggleMenu());
    }
  }

  // ✅ Remove o listener ao destruir o componente (boa prática)
  ngOnDestroy(): void {
    if (this.btnMobileListener) {
      this.btnMobileListener();
      this.btnMobileListener = null;
    }
  }
}