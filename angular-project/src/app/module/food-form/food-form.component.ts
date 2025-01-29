import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { food } from '../../models/Food';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-food-form',
  standalone: false,
  templateUrl: './food-form.component.html',
  styleUrl: './food-form.component.css'
})
export class FoodFormComponent implements OnInit{
  food: food = new food();
  private apiUrl = 'http://localhost:3000/food';

  constructor(private route: ActivatedRoute, private router:Router, private http:HttpClient){

  }

  ngOnInit(): void {
      this.food.customerId = this.route.snapshot.paramMap.get('customerId')
    }

  submit(form:NgForm):void{
    if (form.valid){
      this.http.post(this.apiUrl, this.food).subscribe({
        next: () => {
          alert('Food added successfully!');
          this.router.navigate(['/home']);
        },
        error: (err) => console.error('Error adding food:', err),
      });
    }
  }
}
