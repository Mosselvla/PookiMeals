import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MealGeneratorComponent } from "./components/meal-generator/meal-generator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MealGeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PookiMeals';
}
