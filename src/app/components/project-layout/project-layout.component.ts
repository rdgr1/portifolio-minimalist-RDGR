import { Component, HostListener } from '@angular/core';
import { CardProjetoComponent } from "../card-projeto/card-projeto.component";
import { SetaComponentComponent } from "../seta-component/seta-component.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-layout',
  standalone: true,
  imports: [CardProjetoComponent, SetaComponentComponent, NavBarComponent, CommonModule],
  templateUrl: './project-layout.component.html',
  styleUrls: ['./project-layout.component.scss']
})
export class ProjectLayoutComponent {
  isHovered: boolean = false;
  isMobile: boolean = window.innerWidth <= 768; // 🔹 Define se é mobile ou desktop
  currentIndex: number = 0;

  constructor(private router: Router) {}

  projetos = [
    {
      title: 'Projeto MS-Login-Email',
      text: 'Este repositório contém dois microserviços...',
      linkImg: '/assets/imgs/cards/Card-Login-Email.png',
      linkGithub: 'https://github.com/rdgr1/ms-for-save-send-mail'
    },
    {
      title: 'Sistema de Autenticação com JWT',
      text: 'Este projeto implementa um sistema de autenticação...',
      linkImg: '/assets/imgs/cards/Card-Login-Jwt.png',
      linkGithub: 'https://github.com/rdgr1/login-jwt/tree/master'
    },
    {
      title: 'Portifolio Minimalista',
      text: 'Portifolio pessoal, Minimalista feito em Angular 18...',
      linkImg: '/assets/imgs/cards/Card-Portifollio.png'
    },
    {
      title: 'Automação CAC Java',
      text: 'Este projeto é uma aplicação desenvolvida para...',
      linkImg: '/assets/imgs/cards/Card-CAC-Java.png',
      linkGithub: 'https://github.com/rdgr1/Automacao-CAC-Java'
    },
    {
      title: 'Automação CAC Python',
      text: 'Este projeto é uma aplicação desenvolvida para...',
      linkImg: '/assets/imgs/cards/Card-Python.png',
      linkGithub: 'https://github.com/rdgr1/Automacao_CAC-py'
    },
    {
      title: 'Aprendizado de Spring',
      text: 'Este repositório contém um projeto de aprendizado...',
      linkImg: '/assets/imgs/cards/CardSpringAprendizado.png',
      linkGithub: 'https://github.com/rdgr1/springboot-learning-rod'
    },
    {
      title: 'Caderno Digital MD Rodger',
      text: 'Meu Caderno Digital, para estudos no obsidian...',
      linkImg: '/assets/imgs/cards/Card-Obsidian.png',
      linkGithub: 'https://github.com/rdgr1/Caderno-Digital-MD_RODGER'
    },
    {
      title: 'Token-Email',
      text: 'O projeto Token-Email foi desenvolvido como um teste...',
      linkImg: '/assets/imgs/cards/Card-Token-Email.png',
      linkGithub: 'https://github.com/rdgr1/Token-Email'
    }
  ];

  navigateTo() {
    this.router.navigate(['contato']);
  }

  prevSlide() {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.projetos.length - 1;
  }

  nextSlide() {
    this.currentIndex = this.currentIndex < this.projetos.length - 1 ? this.currentIndex + 1 : 0;
  }

  // 🔹 Aplica hover SOMENTE no desktop
  setHovered(state: boolean): void {
    if (!this.isMobile) { 
      this.isHovered = state;
    }
  }

  // 🔹 Atualiza `isMobile` quando a tela for redimensionada
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isMobile = window.innerWidth <= 768;
  }
}