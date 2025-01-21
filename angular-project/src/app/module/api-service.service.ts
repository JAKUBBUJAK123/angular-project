import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { customer } from '../models/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private apiUrl = 'http://localhost:3000/customers';

  constructor(private httpClient: HttpClient) {}

  addCustomer(customer:customer): Observable<customer>{
    return this.httpClient.post<customer>(this.apiUrl, customer);
  }

  }
