import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContatoResponse } from '../types/contato-response.type';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  apiUrl: string = "http://localhost:8080/api/emails/send"
  constructor(private httpClient : HttpClient) { }
  submitForm(name: string, email: string, message: string){
    return this.httpClient.post<ContatoResponse>(this.apiUrl,{name,email,message})
  }
}
