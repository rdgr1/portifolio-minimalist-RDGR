import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { ToastrService } from 'ngx-toastr';
import { InputFormularioComponent } from "../input-formulario/input-formulario.component";
import { InputMessageComponent } from '../input-message/input-message.component';

@Component({
    selector: 'app-formulario-layout',
    standalone: true,
    imports: [InputFormularioComponent, ReactiveFormsModule, InputMessageComponent, CommonModule],
    templateUrl: './formulario-layout.component.html',
    styleUrls: ['./formulario-layout.component.scss']
})
export class FormularioLayoutComponent implements OnInit {
  isDisabled = false;
  hasClickedBefore = false;
  contatoForm: FormGroup;
  isBrowser: boolean; // Verifica se está no navegador

  constructor(
    private emailService: EmailService,
    private toastr: ToastrService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId); // Verifica se está no browser
    this.contatoForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  ngOnInit() {
    if (this.isBrowser) { // Só executa no navegador
      const hasClicked = localStorage.getItem('buttonClicked');
      this.hasClickedBefore = hasClicked === 'true';
  
      // 🔥 Alterado: o botão só deve ser desativado se o formulário ainda estiver sendo enviado
      this.isDisabled = false;
    }
  }
  
  submit() {
    if (this.contatoForm.invalid) {
      this.toastr.warning('Preencha o formulário corretamente.', 'Aviso');
      return;
    }
  
    this.isDisabled = true; // ✅ Desativa o botão temporariamente
  
    const { name, email, message } = this.contatoForm.value;
  
    this.emailService.submitForm(name!, email!, message!).subscribe({
      next: (response) => {
        this.toastr.success(response.message, 'Sucesso');
  
        if (this.isBrowser) {
          localStorage.setItem('buttonClicked', 'false'); // 🔥 Garante que o botão não fique travado
        }
  
        this.contatoForm.reset(); // 🔥 Limpa o formulário após envio
        this.isDisabled = false; // 🔥 Reativa o botão após envio
      },
      error: (err) => {
        console.error('Erro ao enviar e-mail:', err);
        this.isDisabled = false; // ✅ Reativa o botão caso ocorra erro
  
        const errorMsg = err.error?.message || 'Erro ao enviar o e-mail.';
        this.toastr.error(errorMsg, 'Erro');
      }
    });
  }
  
}
