import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './api-service.service';
import { HomeComponent } from './home/home.component';
import { routingModule } from './routing.module';
import { FoodFormComponent } from './food-form/food-form.component';
import { WorkoutFormComponent } from './workout-form/workout-form.component';



@NgModule({
  declarations: [FormComponent , HomeComponent,FoodFormComponent, WorkoutFormComponent],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    routingModule,
    HttpClientModule
  ],
  providers: [ApiServiceService]
})
export class ModuleModule { }
