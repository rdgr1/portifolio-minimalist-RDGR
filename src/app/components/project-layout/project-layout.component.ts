import { Component, HostListener } from '@angular/core';
import { CardProjetoComponent } from "../card-projeto/card-projeto.component";
import { SetaComponentComponent } from "../seta-component/seta-component.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ProjectCarouselModalComponent } from '../project-carousel-modal/project-carousel-modal.component';
import { title } from 'node:process';
import { link } from 'node:fs';
@Component({
    selector: 'app-project-layout',
    standalone: true,
    imports: [CardProjetoComponent, SetaComponentComponent, NavBarComponent, CommonModule, ProjectCarouselModalComponent],
    templateUrl: './project-layout.component.html',
    styleUrls: ['./project-layout.component.scss']
})
export class ProjectLayoutComponent {
  isHovered: boolean = false;
  isMobile: boolean = typeof window !== 'undefined' && window.innerWidth <= 768;
  currentIndex: number = 0;
  @ViewChild('carouselModal') carouselModal!: ProjectCarouselModalComponent;

  abrirModal(images: string[]) {
    this.carouselModal.open(images);
  }
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
      linkGithub: 'https://github.com/rdgr1/ms-for-save-send-mail',
      disableImg: false,
      disableGithub: false,
      disableLink: true,
      images: ['/assets/imgs/png/MS-SERVICE-SCHEMA.png']
    },
    {
      title: 'Sistema de Autenticação com JWT',
      text: 'Este projeto implementa um sistema de autenticação utilizando JSON Web Tokens (JWT), composto por um backend em Spring Boot e um frontend em Angular.',
      linkImg: '/assets/imgs/cards/Card-Login-Jwt.png',
      linkGithub: 'https://github.com/rdgr1/login-jwt/tree/master',
      disableImg: false,
      disableGithub: false,
      disableLink: true,
      images: [
        'assets/imgs/png/JWT-LOGIN.png',
        'assets/imgs/png/JWT-REGISTER.png'
      ]
    },
    {
      title: 'Aprendizado de Spring',
      text: 'projeto de aprendizado prático para explorar os conceitos e melhores práticas do Spring Boot. Ele serve como um guia para desenvolvedores que desejam se aprofundar no desenvolvimento de aplicações Java com a estrutura Spring Boot',
      linkImg: '/assets/imgs/cards/CardSpringAprendizado.png',
      linkGithub: 'https://github.com/rdgr1/springboot-learning-rod',
      disableImg: true,
      disableGithub: false,
      disableLink: true,
      images: [""]
    },
    {
      title: 'Automação Simianer Holding',
      text: 'Este projeto é uma aplicação desenvolvida para automatizar processos específicos relacionados à gestão de recibos e outras funcionalidades administrativas.',
      linkImg: '/assets/imgs/cards/Card-Simianer-Holdin.png',
      linkGithub: 'https://github.com/rdgr1/Automacao-Simianer-Holding',
      disableImg: false,
      disableGithub: true,
      disableLink: true,
      images: ['/assets/imgs/png/TKINTER-SIMIANER.png','/assets/imgs/png/Recibo-Simianer.png']
    },
    {
      title: 'Automação FMV',
      text: 'Este é um aplicativo simples criado com a biblioteca customtkinter para facilitar o preenchimento e geração de uma nota de recibo com informações do cliente, serviço prestado, e dados financeiros (débito/crédito).',
      linkImg: '/assets/imgs/cards/Card-FMv.png',
      linkGithub: 'https://github.com/rdgr1/gerador_fmv',
      disableImg: false,
      disableGithub: true,
      disableLink: true,
      images: ['/assets/imgs/png/TKINTER-FMV.png',
        '/assets/imgs/png/Recibo-FMV.png']
    },
    {
      title: 'Landing Page Guerreiro Service',
      text:'Está foi um landing feita para atrair público em geral de facilities e afins, para impulsionar o tráfego pago da empresa, layout minimalista/enxuto, visando tranquilidade e facil entendimento dos valores da empresa',
      linkImg: '/assets/imgs/cards/Card-Guerreio-Service.png',
      disableGithub: true,
      linkProject: 'https://guerreiro-service-front.vercel.app',
      disableImg: false,
      disableLink: false,
      images: ['/assets/imgs/png/desktop_guerreiro_lp.png','/assets/imgs/png/mobile_guerreiro_lp.png']
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