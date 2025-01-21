import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModuleModule } from './module/module.module';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModuleModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Food-macro';
}
