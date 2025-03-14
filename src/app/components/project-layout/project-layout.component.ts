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
  isMobile: boolean = typeof window !== 'undefined' && window.innerWidth <= 768;
  currentIndex: number = 0;
  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth <= 768;
      setTimeout(() => {
        this.isMobile = window.innerWidth <= 768; // 🔹 Garante atualização no próximo ciclo de renderização
      }, 0);
    }
  }
  constructor(private router: Router) {}

  projetos = [
    {
      title: 'Projeto MS-Login-Email',
      text: 'Este repositório contém dois microserviços que fazem parte de uma solução maior para gerenciamento de usuários e envio de emails.',
      linkImg: '/assets/imgs/cards/Card-Login-Email.png',
      linkGithub: 'https://github.com/rdgr1/ms-for-save-send-mail'
    },
    {
      title: 'Sistema de Autenticação com JWT',
      text: 'Este projeto implementa um sistema de autenticação utilizando JSON Web Tokens (JWT), composto por um backend em Spring Boot e um frontend em Angular.',
      linkImg: '/assets/imgs/cards/Card-Login-Jwt.png',
      linkGithub: 'https://github.com/rdgr1/login-jwt/tree/master'
    },
    {
      title: 'Portifolio Minimalista',
      text: 'Portifolio pessoal, Minimalista feito em Angular 18...',
      linkGithub: 'https://github.com/rdgr1/portifolio-minimalist-RDGR',
      linkImg: '/assets/imgs/cards/Card-Portifollio.png'
    },
    {
      title: 'Automação CAC Java',
      text: 'Este projeto é uma aplicação desenvolvida para automatizar o processamento e manipulação de PDFs, além de gerenciar fluxos administrativos. Emitindo Declarações Nada Consta, Utilizando Spring',
      linkImg: '/assets/imgs/cards/Card-CAC-Java.png',
      linkGithub: 'https://github.com/rdgr1/Automacao-CAC-Java'
    },
    {
      title: 'Automação CAC Python',
      text: 'Este projeto é uma aplicação desenvolvida para automatizar o processamento e manipulação de PDFs, além de gerenciar fluxos administrativos. Utilizando Selenium e Bibliotecas Atuais de Request',
      linkImg: '/assets/imgs/cards/Card-Python.png',
      linkGithub: 'https://github.com/rdgr1/Automacao_CAC-py'
    },
    {
      title: 'Aprendizado de Spring',
      text: 'projeto de aprendizado prático para explorar os conceitos e melhores práticas do Spring Boot. Ele serve como um guia para desenvolvedores que desejam se aprofundar no desenvolvimento de aplicações Java com a estrutura Spring Boot',
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
      text: 'O projeto Token-Email foi desenvolvido como um simulador de smtp, para criação de um template para envio de emails sem utilizar css avançado',
      linkImg: '/assets/imgs/cards/Card-Token-Email.png',
      linkGithub: 'https://github.com/rdgr1/Token-Email'
    },
    {
      title: 'Automação Simianer Holding',
      text: 'Este projeto é uma aplicação desenvolvida para automatizar processos específicos relacionados à gestão de recibos e outras funcionalidades administrativas.',
      linkImg: '/assets/imgs/cards/Card-Simianer-Holdin.png',
      linkGithub: 'https://github.com/rdgr1/Automacao-Simianer-Holding'
    },
    {
      title: 'Automação FMV',
      text: 'Este é um aplicativo simples criado com a biblioteca customtkinter para facilitar o preenchimento e geração de uma nota fiscal com informações do cliente, serviço prestado, e dados financeiros (débito/crédito).',
      linkImg: '/assets/imgs/cards/Card-FMv.png',
      linkGithub: 'https://github.com/rdgr1/gerador_fmv'
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