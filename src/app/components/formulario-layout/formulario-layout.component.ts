import { Component} from '@angular/core';
import { InputFormularioComponent } from "../input-formulario/input-formulario.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-formulario-layout',
  standalone: true,
  imports: [InputFormularioComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './formulario-layout.component.html',
  styleUrl: './formulario-layout.component.scss'
})
export class FormularioLayoutComponent {
  constructor(private emailService: EmailService){
  }
  contatoForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(5)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    message: new FormControl('',[Validators.required,Validators.minLength(10)])
  });
  submit() {
    if (this.contatoForm.valid) {
      const { name, email, message } = this.contatoForm.value;
  
      this.emailService.submitForm(name!, email!, message!).subscribe(
        (response) => console.log('Requisição enviada com sucesso:', response),
        (error) => console.error('Erro na requisição:', error)
      );
    }
  }
  
}
