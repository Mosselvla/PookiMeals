import { Component } from '@angular/core';
import { Meal } from '../../models/meal';
import { MealGeneratorService } from '../../services/meal-generator.service';

@Component({
  selector: 'app-meal-generator',
  standalone: true,
  imports: [],
  templateUrl: './meal-generator.component.html',
  styleUrl: './meal-generator.component.scss',
})
export class MealGeneratorComponent {
  meal?: Meal;

  constructor(private _mealGeneratorService: MealGeneratorService) {
    _mealGeneratorService;
  }

  goToLink(url?: string){
    window.open(url, "_blank");
}

  public getMeal() {
    this.meal = this._mealGeneratorService.getMeal();
  }
}
