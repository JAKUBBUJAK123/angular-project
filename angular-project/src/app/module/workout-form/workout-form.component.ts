import { Component, OnInit } from '@angular/core';
import { excercise } from '../../models/Excercise';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-workout-form',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './workout-form.component.html',
  styleUrl: './workout-form.component.css'
})
export class WorkoutFormComponent implements OnInit{
  excercise: excercise = new excercise();
  private apiUrl = 'http://localhost:3000/workout';

    constructor(private route: ActivatedRoute, private router:Router, private http:HttpClient){
  
    }

    ngOnInit(): void {
      this.excercise.customerId = this.route.snapshot.paramMap.get('customerId')
    }

    submit(form:NgForm):void{
      if (form.valid){
        this.http.post(this.apiUrl, this.excercise).subscribe({
          next: () => {
            alert('excercise added successfully!');
            this.router.navigate(['/home']);
          },
          error: (err) => console.error('Error adding food:', err),
        });
      }
    }

}
