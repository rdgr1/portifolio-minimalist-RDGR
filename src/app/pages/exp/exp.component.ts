import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import {CardExpComponent} from '../../components/card-exp/card-exp.component';
import {NgForOf} from '@angular/common';
import { SetaComponentComponent } from "../../components/seta-component/seta-component.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-exp',
  imports: [NavBarComponent, CardExpComponent, NgForOf, SetaComponentComponent],
  templateUrl: './exp.component.html',
  styleUrl: './exp.component.scss'
})
export class ExpComponent {
  constructor(private router: Router){}

  exps_form = [
    {
      title: 'Brasfort Segurança e Serviços Terceirizados',
      subtitle: 'Estágio de Desenvolvimento - (Java)',
      text: 'Auxiliar na manuntenção e implementação de funções no sistema ERP.' +
        'e auxiliar no desenvolvimento de soluções empresariais e administra' +
        'tivas utilizando automações e softwares com java e spring,kotlin e ' +
        'em soluções front-end Angular/Typescript.',
      date: '11/07/2024 - 11/07/2025 (Presencial)',
      pos: 'left',
      link: '/assets/imgs/png/Brasfort-Logo.png',
    },
        {
      title: 'Freelancer – Automação Python Tkinter',
      subtitle: 'Simianer Holding',
      text: 'Desenvolvimento de aplicação desktop com Tkinter (Python) para geração de recibos automatizados. \n' +
        'Implementação de hashing seguro para validar integridade das informações geradas nos documentos. \n' +
        'Interface intuitiva, com input de dados dinâmico e geração de recibos em PDF.',
      date: 'Remoto – Fevereiro/2025',
      pos: 'right',
      link: '/assets/imgs/png/Simianer-Logo.png',
    },
        {
      title: 'Freelancer – Automação Python Tkinter',
      subtitle: 'Facilitators Serviços Contábeis',
      text: 'Aplicativo de geração de recibos personalizados utilizando Tkinter, com base em dados inseridos por operadores.\n' +
        'Integração de mecanismos de segurança por hash digital, visando evitar falsificações.\n' +
        'Entrega com setup simplificado e documentação para uso interno.',
      date: 'Remoto – Março/2025',
      pos: 'left',
      link: '/assets/imgs/png/FMV-Logo.png',

    },
    {
      title: 'Freelancer – Landing Page Angular',
      subtitle: 'Guerreiro Services Facilities',
      text: 'Está foi um landing feita para atrair público em geral de facilities e afins, para impulsionar ' +
        'o tráfego pago da empresa, layout minimalista/enxuto, visando tranquilidade e facil entendimento ' +
        'dos valores da empresa',
      date: 'Remoto – Maio/2025',
      pos: 'right',
      link: '/assets/imgs/png/Guerreiro-Logo.png',
    },
    {
      title: 'Brasfort Segurança e Serviços Terceirizados',
      subtitle: 'Assistente de Desenvolvimento - (Fullstack Java + Angular)',
      text: 'Sou responsável por analisar, projetar e implementar sistemas de informação que atendem às ' +
        'necessidades e processos da empresa. atuando na identificação de problemas e melhorias dos mesmos,' +
        ' na definição de requisitos, no desenvolvimento de soluções e na garantia do bom funcionamento e ' +
        'integração dos sistemas assim como grande parte da documentação e testes unitários',
      date: '04/08/2025 - Atual (Presencial)',
      pos: 'left',
      link: '/assets/imgs/png/Brasfort-Logo.png',
    },
  ]

  navigate(){
    this.router.navigate(['contato'])
  }
}
