import { Component } from '@angular/core';
import { InputFormularioComponent } from "../input-formulario/input-formulario.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from 'express';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-formulario-layout',
  standalone: true,
  imports: [InputFormularioComponent,ReactiveFormsModule],
  templateUrl: './formulario-layout.component.html',
  styleUrl: './formulario-layout.component.scss'
})
export class FormularioLayoutComponent {
  constructor(private router: Router, private contatoService: ContatoService){
  }
  contatoForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(5)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    message: new FormControl('',[Validators.required,Validators.minLength(10)])
  });
  submit(){

  }
}
