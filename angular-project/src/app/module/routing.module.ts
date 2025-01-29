import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FormComponent } from "./form/form.component";
import { NgModule } from '@angular/core';
import { FoodFormComponent } from "./food-form/food-form.component";
import { WorkoutFormComponent } from "./workout-form/workout-form.component";





const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'form', component: FormComponent},
    {path: 'food/:customerId', component: FoodFormComponent,},
    {path:'workout/:customerId' , component: WorkoutFormComponent, }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports : [RouterModule]
  })
export class routingModule { }