import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContatoResponse } from '../types/contato-response.type';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl: string = "https://contato-spring-back-end-portifolio.onrender.com/api/emails/send";

  constructor(private httpClient: HttpClient) {}

  submitForm(name: string, email: string, message: string): Observable<ContatoResponse> {
    const formData = { name, email, message };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.post<ContatoResponse>(this.apiUrl, formData, { headers, responseType: 'json' });
  }
}
