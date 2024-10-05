import { Component } from '@angular/core';
import { Meal } from '../../models/meal';
import { MealGeneratorService } from '../../services/meal-generator.service';
import { OpenAIService } from '../../services/open-ai.service';

@Component({
  selector: 'app-meal-generator',
  standalone: true,
  imports: [],
  templateUrl: './meal-generator.component.html',
  styleUrl: './meal-generator.component.scss',
})
export class MealGeneratorComponent {
  meal?: Meal;
  previousMeals: Meal[] = [];
  openAiAnswer: string = '';
  loadingOpenAi = false;

  constructor(private _mealGeneratorService: MealGeneratorService, private _openAiService: OpenAIService) {
    _mealGeneratorService;
  }

  goToLink(url?: string) {
    window.open(url, '_blank');
  }

  public getMeal() {
    if (this.meal) {
      this.previousMeals.push(this.meal);
    }
    let foundMeal = false;
    let result: Meal = new Meal('');
    while (!foundMeal) {
      result = this._mealGeneratorService.getMeal();
      if (!this.previousMeals.some((m) => m.name === result.name)) {
        foundMeal = true;
      }
    }
    if (result) {
      this.meal = result;
    }
  }

  public async getSimilarMeals() {
    this.loadingOpenAi = true;
    this.openAiAnswer = await this._openAiService.requestSimilarMeals(this.previousMeals);
    this.loadingOpenAi = false;
  }
}
