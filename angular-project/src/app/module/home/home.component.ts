
import { Component, OnInit } from '@angular/core';
import { customer } from '../../models/Customer';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { food } from '../../models/Food';
import { excercise } from '../../models/Excercise';


@Component({
  selector: 'app-home',
  standalone: false,  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  customers : customer[] = [];
  foods: food[] =[];
  excercises: excercise[]= [];

  constructor (private http: HttpClient, private router:Router){

  };
  ngOnInit(): void {
      this.getCustomerData();
      this.getExcerciseData();
      this.getFoodData();
  };

  getCustomerData(): void{
    this.http.get<customer[]>('http://localhost:3000/customers').subscribe({
      next: (data) => (this.customers = data),
      error: (err) => console.error("error fetching data" , err)
    });
  }

  getFoodData(): void{
    this.http.get<food[]>('http://localhost:3000/food').subscribe({
      next: (data) => (this.foods = data),
      error: (err) => console.error("error fetching data" , err)
    });
  }

  getExcerciseData(): void{
    this.http.get<excercise[]>('http://localhost:3000/workout').subscribe({
      next: (data) => (this.excercises = data),
      error: (err) => console.error("error fetching data" , err)
    });
  }


  getCustomerFood(customerId: string): food[] {
    return this.foods.filter(food => food.customerId === customerId);
  }

  getCustomerExercises(customerId: string): excercise[] {
    return this.excercises.filter(exercise => exercise.customerId === customerId);
  }


  goToFoodForm(id:string): void {
    this.router.navigate(['/food' , id]);
  }

  goToWorkoutForm(id:string): void {
    this.router.navigate(['/workout' , id]);
  }

  goBack(): void {
    this.router.navigate(['/form']);
  }
}
