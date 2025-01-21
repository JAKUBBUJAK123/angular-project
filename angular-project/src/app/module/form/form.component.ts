/* eslint-disable @angular-eslint/prefer-standalone */
import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { customer } from '../../models/Customer';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  customer: customer  = new customer();

  constructor(private apiService: ApiServiceService , private router : Router) {}

  async handleSubmit(form: NgForm): Promise<void> {
    if(form.valid){
      this.apiService.addCustomer(this.customer).subscribe(
        () => {
          alert("Customer added")
          this.router.navigate(['/home'])
          
        },
       (error)=>{
          console.error('Error' , error)
        }
      )
    }
  }

}
